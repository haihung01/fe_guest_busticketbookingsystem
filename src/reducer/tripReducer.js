import { FETCH_TRIP_DATA, SET_TRIP_DATA } from '../action/tripAction';

const initialState = {
  tripData: null,
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIP_DATA:
      return {
        ...state,
        tripData: action.payload,
      };
    default:
      return state;
  }
};

export default tripReducer;