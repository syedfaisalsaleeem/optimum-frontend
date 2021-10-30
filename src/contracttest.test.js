import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import EventsClient from './EventsClient';

pactWith({ consumer: 'MyConsumer', provider: 'MyProvider' }, provider => {

  describe('get list of todo', () => {
    const feedback = [{
        todolist: 'Is it possible to export projects on this app?'
    }];
    const expectedResult = [{
        todolist: 'Is it possible to export projects on this app?'
    }];
    // Here we set up the interaction that the Pact
    // mock provider will expect.
    //
    // jest-pact takes care of validating and tearing
    // down the provider for you.
    beforeEach(() => // note the implicit return.
                     // addInteraction returns a promise.
                     // If you don't want to implict return,
                     // you will need to `await` the result
      provider.addInteraction({
        uponReceiving: 'A request for API health',
        willRespondWith: {
          status: 200,
          body: expectedResult,
        },
        withRequest: {
          method: 'GET',
          path: '/todolist',
        },
      })
    );

    it('should get list of todo items', async() => {
        // // Arrange
        const feedbackClient = new EventsClient({host: provider.mockService.baseUrl});

        // // Act
        const result = await feedbackClient.getEvents();
        console.log(provider.mockService.baseUrl,"--- result")
        // Assert
        expect(result).toEqual(feedback);
        provider.verify(result);
    });
  });


  describe('create todo item', () => {
    const feedback = [{
        todolist: 'Is it possible to export projects on this app?'
    }];
    const expectedResult = [{
        todolist: 'Is it possible to export projects on this app?'
    }];
    // Here we set up the interaction that the Pact
    // mock provider will expect.
    //
    // jest-pact takes care of validating and tearing
    // down the provider for you.
    beforeEach(() => // note the implicit return.
                     // addInteraction returns a promise.
                     // If you don't want to implict return,
                     // you will need to `await` the result
      provider.addInteraction({
        uponReceiving: 'A request to create todo item',
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
          body: expectedResult,
        },
        withRequest: {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          path: '/todolist',
        },
      })
    );

    it('should create list of todo items', async() => {
        // // Arrange
        const feedbackClient = new EventsClient({host: provider.mockService.baseUrl});

        // // Act
        const result = await feedbackClient.createEvents(feedback);
        // Assert
        expect(result).toEqual(expectedResult);
        provider.verify(result);
    });

  });

});