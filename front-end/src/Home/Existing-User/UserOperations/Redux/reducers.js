import { combineReducers } from 'redux';
import { GET_DATA_SUCCESS } from './action';

const initialState = {
  data: [],
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
