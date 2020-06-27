import {FETCHING_SMURF_VILLAGE_START, FETCHING_SMURF_VILLAGE_SUCCESS,FETCHING_SMURF_VILLAGE_FAIL } from '../actions'

const initialState = {
    smurfs:[],
    isFetching: false,
    error: ''


}

export const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCHING_SMURF_VILLAGE_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCHING_SMURF_VILLAGE_SUCCESS:
            console.log("action", action.payload)
            return{
                ...state,
                smurfs: action.payload
            }
        case FETCHING_SMURF_VILLAGE_FAIL:
            return{
                state
            }
        default:
            return state;
    }
}