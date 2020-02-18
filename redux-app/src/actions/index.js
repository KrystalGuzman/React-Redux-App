import axios from 'axios';

export const LOADING = 'LOADING';
export const DATES = 'DATES';
export const ERROR = 'ERROR';


export const fetchActivity = () => {
    return dispatch => {
      dispatch({type:LOADING});
      axios
        .get('http://numbersapi.com/random/date')
        .then(res => {
          console.log("over here!", res.data)
          dispatch({type: DATES, payload: res.data});
        })
        .catch(err => {
            console.log("error", err)
            dispatch({ type: ERROR, payload: err })
        });
    };
  };