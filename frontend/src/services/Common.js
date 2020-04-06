import axios from 'axios';

import { URL_PREFIX } from './Const';

export function getDefaultDates() {
  return axios.all([getFinalDate(), getMinMaxDate()]).then(([final, minmax]) => {
    return {
      finalDate: final.data,
      minMaxDate: minmax.data
    }
  });
}

function getFinalDate() {
  return axios.get(`${URL_PREFIX}/finaldate`);
}

function getMinMaxDate() {
  return axios.get(`${URL_PREFIX}/minmaxdate`);
}
