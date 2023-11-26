export const FETCH_TRIP_DATA = 'FETCH_TRIP_DATA';
export const SET_TRIP_DATA = 'SET_TRIP_DATA';

export const fetchTripData = () => ({
  type: FETCH_TRIP_DATA,
});

export const setTripData = (data) => ({
  type: SET_TRIP_DATA,
  payload: data,
});
