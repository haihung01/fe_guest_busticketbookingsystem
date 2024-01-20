import { FETCH_TRIP_DATA, SET_TRIP_DATA, SET_SEARCH_COMPLETED, GET_SEAT_DATA, GET_CONFIG_DATA, SET_TRIP_DETAIL, SET_PICKUP, SET_DROPOFF, SET_PAYMENT_INFO } from '../action/tripAction';

const initialState = {
  tripData: [],
  tripDetail: {},
  searchCompleted: false,
  DetailSeat: [],
  pickupSelected: 0,
  dropoffSelected: 0,
  dataPayment: {}
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIP_DATA:
      return {
        ...state,
        tripData: action.payload,
      };
    case SET_TRIP_DETAIL:
      return {
        ...state,
        tripDetail: action.payload,
      };
    case SET_PAYMENT_INFO:
      return {
        ...state,
        dataPayment: action.payload,
      };
    case SET_SEARCH_COMPLETED:
      return {
        ...state,
        searchCompleted: action.payload,
      };
    case SET_PICKUP:
      return {
        ...state,
        pickupSelected: action.payload,
      };
    case SET_DROPOFF:
      return {
        ...state,
        dropoffSelected: action.payload,
      };
    case GET_SEAT_DATA:
      return {
        ...state,
        DetailSeat: action.payload,
      };
    case GET_CONFIG_DATA:
      return {
        ...state,
        DetailConfig: action.payload,
      };
    default:
      return state;
  }
};

export default tripReducer;