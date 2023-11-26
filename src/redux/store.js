import { createStore, combineReducers } from "redux";
import tripReducer from "../reducer/tripReducer"; // Path to your trip reducer

const rootReducer = combineReducers({
  tripReducer, // Add any other reducers here
});

const store = createStore(rootReducer);
export default store;