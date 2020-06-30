import { Bill, BillsMap } from '../../types';
import { actionTypes, BillsActionType } from '../actions/bills';

// State
export interface BillsState {
    loading: boolean;
    byId: BillsMap;
    allIds: string[];
    error?: string;
}

const initialState: BillsState = {
    loading: false,
    byId: {},
    allIds: [],
};

// Reducer
export default function reducer(state: BillsState = initialState, action: BillsActionType) {
    switch (action.type) {
        case actionTypes.FETCH_ACTION:
        case actionTypes.UPDATE_ACTION:
            return { ...state, loading: true };
        case actionTypes.FETCH_SUCCESS:
            const byId: BillsMap = {};
            const allIds: string[] = [];
            // convert bills array to map using the id as the key for a given bill
            // increases effeciency going forward when selecting individual items (i.e. saves having to find each bill every time one is selected).
            // Also, store an array to use with displaying lists etc.
            // (only storing bill ids instead of whole bill in the array to reduce size complexity as already storing bill in the map)
            action.data.forEach((bill: Bill) => {
                byId[bill.id] = bill;
                allIds.push(bill.id);
            });
            return {
                ...state,
                loading: false,
                byId,
                allIds,
            };
        case actionTypes.FETCH_FAIL:
            return {
                ...state,
                loading: false,
                data: undefined,
                error: action.error,
            };
        case actionTypes.UPDATE_SUCCESS:
            const byId_Updated: BillsMap = { ...state.byId };
            byId_Updated[action.data.id] = action.data;

            return { ...state, loading: false, byId: byId_Updated };
        case actionTypes.UPDATE_FAIL:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}
