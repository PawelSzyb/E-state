import { FETCH_LATEST } from "./types";
import { GET_ERRORS } from "./types";

// Fetch latest listings
export const fetchLatestListing = () => {
  return dispatch => {
    fetch("http://localhost:5000/listings/latest")
      .then(res => res.json())
      .then(listings => {
        dispatch({
          type: FETCH_LATEST,
          payload: listings
        });
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err
        });
      });
  };
};
