import EventsClient from './EventsClient';
import {eventsClientFixtures} from './events-client';

describe('returns the expected result when the events service returns a list of todo items', () => {

  it('returns a list of todo items', async () => {
    // Arrange
    const expectedResult = eventsClientFixtures.getEvents.EVENTS;
    const eventsClient = new EventsClient({host: "http://localhost:1234"});

    // Act
    const events = await eventsClient.getEvents();

    // Assert
    expect(events).toEqual(expectedResult);
  });
});