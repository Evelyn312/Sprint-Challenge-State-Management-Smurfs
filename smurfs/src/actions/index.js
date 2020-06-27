
import axios from 'axios';

export const FETCHING_SMURF_VILLAGE_START = 'FETCHING_SMURF_VILLAGE_START';
export const FETCHING_SMURF_VILLAGE_SUCCESS = 'FETCHING_SMURF_VILLAGE_SUCCESS';
export const FETCHING_SMURF_VILLAGE_FAIL = 'FETCHING_SMURF_VILLAGE_FAIL';
export const SUBMIT_FORM = 'SUBMIT_FORM';


export const submitForm = submitForm => {
    console.log("testing", submitForm)
    axios
        .post ('http://localhost:3333/smurfs',{submitForm})
        .then(res => {
            console.log('res', res);
        })
    return({ type: SUBMIT_FORM, payload: submitForm})
}
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