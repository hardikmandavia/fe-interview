import axios from 'axios';

import { Bill } from '../types';
import { APIConstants } from '../shared/constants';

export const fetchBills = () => axios.get(`${APIConstants.base}/bills`).then((res) => res.data);

export const updateBill = (data: Bill) =>
    axios.patch(`${APIConstants.base}/bills/${data.id}`, data);
