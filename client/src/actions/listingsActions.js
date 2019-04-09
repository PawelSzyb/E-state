import { FETCH_LATEST, GET_SINGLE_LISTING } from "./types";
import { GET_ERRORS } from "./types";

// Create error with objects
function ObjectError(data) {
  this.data = data;
}
ObjectError.prototype = new Error();

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
        console.log(err);
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
      .then(res => {
        if (!(res.status === 200) && !(res.status === 201)) {
          return res.json();
        } else {
          return history.push("/");
        }
      })
      .then(data => {
        throw new ObjectError(data);
      })
      .catch(error => {
        return dispatch({
          type: GET_ERRORS,
          payload: error.data
        });
      });
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
