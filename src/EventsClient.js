import axios from 'axios';

class EventsClient {
  constructor(options) {
    this.host = options.host;
  }

  getEvents() {
    const headers = {"Accept": "application/json"};

    return axios({
        url: `${this.host}/events`,
        method: 'GET',
        headers
      })
      .then(function (response) {
        return response.data;
      });
  }
}

export default EventsClient;