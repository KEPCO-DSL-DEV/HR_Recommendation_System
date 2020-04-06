import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 300 });

// Common
mock.onGet('/finaldate').reply(config => {
  return [200, '2019-06-30'];
});

mock.onGet('/minmaxdate').reply(config => {
  return [
    200,
    {
      min: '2019-07',
      max: '2020-11',
    },
  ];
});
