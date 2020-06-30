import { Bill } from '../../types';

// Action Types
export enum actionTypes {
    // FETCH
    FETCH_ACTION = 'BILLS/FETCH/ACTION',
    FETCH_SUCCESS = 'BILLS/FETCH/SUCCESS',
    FETCH_FAIL = 'BILLS/FETCH/FAIL',

    // UPDATE
    UPDATE_ACTION = 'BILLS/UPDATE/ACTION',
    UPDATE_SUCCESS = 'BILLS/UPDATE/SUCCESS',
    UPDATE_FAIL = 'BILLS/UPDATE/FAIL',
}

// FETCH
export interface FetchAction {
    type: actionTypes.FETCH_ACTION;
}
export interface FetchSuccess {
    type: actionTypes.FETCH_SUCCESS;
    data: Bill[];
}
export interface FetchFail {
    type: actionTypes.FETCH_FAIL;
    error: string;
}
type Fetch = FetchAction | FetchSuccess | FetchFail;

// UPDATE
export interface UpdateAction {
    type: actionTypes.UPDATE_ACTION;
    data: Bill;
}
export interface UpdateSuccess {
    type: actionTypes.UPDATE_SUCCESS;
    data: Bill;
}
export interface UpdateFail {
    type: actionTypes.UPDATE_FAIL;
    error: string;
}
type Update = UpdateAction | UpdateSuccess | UpdateFail;

export type BillsActionType = Fetch | Update;

// Action Creators

// FETCH
const fetch = (): FetchAction => ({
    type: actionTypes.FETCH_ACTION,
});
const fetchSuccess = (data: Bill[]): FetchSuccess => ({
    type: actionTypes.FETCH_SUCCESS,
    data,
});
const fetchFail = (error: string): FetchFail => ({
    type: actionTypes.FETCH_FAIL,
    error,
});

// UPDATE
const update = (data: Bill): UpdateAction => ({
    type: actionTypes.UPDATE_ACTION,
    data,
});
const updateSuccess = (data: Bill): UpdateSuccess => ({
    type: actionTypes.UPDATE_SUCCESS,
    data,
});
const updateFail = (error: string): UpdateFail => ({
    type: actionTypes.UPDATE_FAIL,
    error,
});

export const actions = {
    fetch,
    fetchSuccess,
    fetchFail,
    update,
    updateSuccess,
    updateFail,
};
