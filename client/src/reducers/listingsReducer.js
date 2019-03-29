import { FETCH_LATEST, GET_SINGLE_LISTING } from "../actions/types";

const initialState = {
  latestListings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LATEST:
      return {
        ...state,
        latestListings: action.payload
      };
    case GET_SINGLE_LISTING:
      return {
        ...state,
        singleListing: action.payload
      };
    default:
      return state;
  }
}
