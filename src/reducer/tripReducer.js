import { FETCH_TRIP_DATA, SET_TRIP_DATA ,SET_SEARCH_COMPLETED ,GET_SEAT_DATA} from '../action/tripAction';

const initialState = {
  tripData: [],
  searchCompleted: false,
  DetailSeat: []  
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIP_DATA:
      return {
        ...state,
        tripData: action.payload,
      };
      case SET_SEARCH_COMPLETED:
      return {
        ...state,
        searchCompleted: action.payload,
      };
      case GET_SEAT_DATA:
        return {
          ...state,
          DetailSeat: action.payload,
        };
    default:
      return state;
  }
};

export default tripReducer;