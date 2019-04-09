import { combineReducers } from "redux";
import listingReducer from "./listingsReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  listings: listingReducer,
  errors: errorsReducer
});
