export const FETCH_TRIP_DATA = 'FETCH_TRIP_DATA';
export const SET_TRIP_DATA = 'SET_TRIP_DATA';
export const SET_TRIP_DETAIL = 'SET_TRIP_DETAIL';
export const SET_SEARCH_COMPLETED ='SET_SEARCH_COMPLETED'
export const GET_SEAT_DATA ='GET_SEAT_DATA'
export const GET_CONFIG_DATA = 'GET_CONFIG_DATA'
export const fetchTripData = () => ({
  type: FETCH_TRIP_DATA,
});

export const setTripData = (data) => ({
  type: SET_TRIP_DATA,
  payload: data,
});
export const setTripDetail = (data) => ({
  type: SET_TRIP_DETAIL,
  payload: data,
});
export const getSeatFromTrip = (data) => ({
    type: GET_SEAT_DATA,
    payload: data,
  });
  export const getConfigFromTrip = (data) => ({
    type: GET_CONFIG_DATA,
    payload: data,
  });
export const setSearchCompleted = (status) => {
    return {
      type: 'SET_SEARCH_COMPLETED',
      payload: status,
    };
  };