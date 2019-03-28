import { combineReducers } from "redux";
import listingReducer from "./listingsReducer";

export default combineReducers({
  listings: listingReducer
});
