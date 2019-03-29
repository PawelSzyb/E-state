import { FETCH_LATEST, GET_SINGLE_LISTING } from "./types";
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

// Add new listing
export const addListing = (listingData, history) => {
  return dispatch => {
    fetch("http://localhost:5000/listings/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: listingData
    })
      .then(listing => {
        history.push("/");
      })
      .catch(err => console.log(err));
  };
};

// Get single info listing
export const getSingleListing = id => {
  return dispatch => {
    fetch(`http://localhost:5000/listings/${id}`)
      .then(res => res.json())
      .then(listing => {
        dispatch({
          type: GET_SINGLE_LISTING,
          payload: listing
        });
      })
      .catch(error => console.log(error));
  };
};
