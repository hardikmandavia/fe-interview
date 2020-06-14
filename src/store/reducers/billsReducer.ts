// Action Types
export enum actionTypes {
  FETCH_ACTION = 'BILLS/FETCH/REQUEST',
  FETCH_SUCCESS = 'BILLS/FETCH/SUCCESS',
  FETCH_FAIL = 'BILLS/FETCH/FAIL'
}

export interface FetchAction {
  type: actionTypes.FETCH_ACTION;
}

export interface FetchSuccessAction {
  type: actionTypes.FETCH_SUCCESS;
  data: any;
}

export interface FetchFailAction {
  type: actionTypes.FETCH_FAIL;
  error: string;
}

export type BillsActionType = FetchAction | FetchSuccessAction | FetchFailAction;

// Action Creators
const fetch = (): FetchAction => ({
  type: actionTypes.FETCH_ACTION
});

const fetchSuccess = (data: any): FetchSuccessAction => ({
  type: actionTypes.FETCH_SUCCESS,
  data
});

const fetchFail = (error: string): FetchFailAction => ({
  type: actionTypes.FETCH_FAIL,
  error
});

export const actions = {
  fetch,
  fetchSuccess,
  fetchFail
}

// State
export interface BillsState {
  loading: boolean;
  data?: any;
  error?: string;
}

const initialState: BillsState = {
  loading: false
};

// Reducer
export default function reducer(state: BillsState = initialState, action: BillsActionType) {
  switch (action.type) {
    case actionTypes.FETCH_ACTION:
      return { ...state, loading: true };
    case actionTypes.FETCH_SUCCESS:
      console.log(action.data);
      return { ...state, loading: false, data: action.data };
    case actionTypes.FETCH_FAIL:
      return { ...state, loading: false, data: undefined, error: action.error };
    default:
      return state;
  }
}
