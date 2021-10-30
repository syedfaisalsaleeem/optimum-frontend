import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import EventsClient from './EventsClient';

pactWith({ consumer: 'MyConsumer', provider: 'MyProvider' }, provider => {
  let client;

//   beforeEach(() => {
//     client = api('http://your-api.example.com').ge
//   });

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

    // You also test that the API returns the correct
    // response to the data layer.
    //
    // Although Pact will ensure that the provider
    // returned the expected object, you need to test that
    // your code recieves the right object.
    //
    // This is often the same as the object that was
    // in the network response, but (as illustrated
    // here) not always.

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
    // it('returns server health', () => // implicit return again
    //   client.health().then(health => {
    //     expect(health).toEqual('up');
    //   }
    //   )
    //   );
  });
});