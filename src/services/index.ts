import axios from 'axios';

const url = 'http://localhost:3002';

export const fetchBills = () => {
  return axios.get(`${url}/bills`).then((res) => res.data);
}
