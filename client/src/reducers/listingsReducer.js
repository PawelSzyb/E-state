import { FETCH_LATEST } from "../actions/types";

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
    default:
      return state;
  }
}
