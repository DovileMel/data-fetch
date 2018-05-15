import * as actionTypes from './actionTypes';

export const getDataArr = () => (dispatch) => {
  return fetch('../data/response.json')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: actionTypes.FETCH_DATA,
        payload: data.payload,
        count: data.totalItems,
      });
      return Promise.resolve(data.payload);
    })
    .catch((error) => {
      throw new Error(error);
    });
}



