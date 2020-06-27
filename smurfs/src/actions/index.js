
import axios from 'axios';

export const FETCHING_SMURF_VILLAGE_START = 'FETCHING_SMURF_VILLAGE_START';
export const FETCHING_SMURF_VILLAGE_SUCCESS = 'FETCHING_SMURF_VILLAGE_SUCCESS';
export const FETCHING_SMURF_VILLAGE_FAIL = 'FETCHING_SMURF_VILLAGE_FAIL';



export const fetchSmurfVillage = () => dispatch => {
    dispatch ( {type: FETCHING_SMURF_VILLAGE_START});
    axios
        .get ('http://localhost:3333/smurfs')
        .then(res => {
            console.log("res", res);
            dispatch({ type: FETCHING_SMURF_VILLAGE_SUCCESS, payload: res.data})
        })
        .catch (err => {
            console.log(err.response);
            dispatch({ type: FETCHING_SMURF_VILLAGE_FAIL, payload: err.response})
        })

};