import axios from 'axios';

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getData = () => (dispatch) => {
  axios.get('http://localhost:4000/users')
    .then((response) => {
      dispatch(getDataSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
