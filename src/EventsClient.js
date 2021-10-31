import axios from 'axios';

class EventsClient {
  constructor(options) {
    this.host = options.host;
  }

  getEvents() {
    const headers = {"Accept": "application/json"};
    // return {
    //     todolist: 'Is it possible to export projects on this app?'
    // };
    var path=require('path');
    var lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
    var http=require(lib);
    return axios({
        adapter: http,
        url: `${this.host}/todolist`,
        method: 'GET',
        headers
      })
      .then(function (response) {
        return response.data
      });
  }

  createEvents(body) {
    const headers = {"Accept": "application/json"};
    // return {
    //     todolist: 'Is it possible to export projects on this app?'
    // };
    var path=require('path');
    var lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
    var http=require(lib);
    return axios({
        adapter: http,
        url: `${this.host}/todolist`,
        method: 'POST',
        data:body,
        headers
      })
      .then(function (response) {
        return response.data
      });
  }

}

export default EventsClient;