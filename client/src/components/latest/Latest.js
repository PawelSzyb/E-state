import React, { Component } from "react";
import Card from "../common/Card";
import { MDBContainer } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLatestListing } from "../../actions/listingsActions";

import "./Latest.css";

class Latest extends Component {
  componentDidMount() {
    this.props.fetchLatestListing();
  }

  render() {
    const latestListings = this.props.listings;
    return (
      <MDBContainer>
        <h3 className="text-center" style={{ marginTop: "45px" }}>
          Latest Listings
        </h3>
        <div className="card__container mt-5">
          {latestListings.map(listing => {
            return (
              <Card
                key={listing._id}
                owner={listing.owner}
                title={listing.title}
                location={listing.location}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                garages={listing.garages}
                sq={listing.sq}
                added={listing.createdAt.substring(0, 10)}
                btnName="More Info"
                id={listing._id}
              />
            );
          })}
        </div>
      </MDBContainer>
    );
  }
}

Latest.protoTypes = {
  fetchLatestListing: PropTypes.func.isRequired,
  listings: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    listings: state.listings.latestListings
  };
};

export default connect(
  mapStateToProps,
  {
    fetchLatestListing
  }
)(Latest);
