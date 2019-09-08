import axios from 'axios';
import {GETALLCARDS, GETALLCARDSFAIL, GETALLCARDSSUCCESS} from '../../types';
import {api, apiKey, host} from '../../../lib/Api';

export const getAllCards = () => {
  return dispatch => {
    dispatch({type: GETALLCARDS});
    axios
      .get(`${api}cards`, {
        headers: {
          'x-rapidapi-host': host,
          'x-rapidapi-key': apiKey,
        },
      })
      .then(res => getAllCardSuccess(dispatch, res.data));
  };
};

const getAllCardSuccess = (dispatch, data) => {
  dispatch({type: GETALLCARDSSUCCESS, payload: data});
};
