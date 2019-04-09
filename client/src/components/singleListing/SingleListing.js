import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBIcon } from "mdbreact";
import { connect } from "react-redux";

import { getSingleListing } from "../../actions/listingsActions";

import ListingInfo from "./ListingInfo";

import "./SingleListing.css";

class SingleListing extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleListing(id);
  }
  render() {
    const { listing } = this.props;
    let content;
    if (!listing) {
      content = <h2>Loading...</h2>;
    } else {
      content = (
        <>
          <div className="listing__banner">
            <div className="listing__banner-overlay">
              <h3 className="listing__header">{listing.title}</h3>
              <p className="listing__location">{listing.location}</p>
            </div>
          </div>
          <MDBContainer className="listing__container">
            <Link to="/">
              <MDBBtn color="indigo" className="btn-back">
                <MDBIcon className="mr-2" icon="long-arrow-alt-left" />
                Home
              </MDBBtn>
            </Link>
            <ListingInfo listing={listing} />
          </MDBContainer>
        </>
      );
    }
    return content;
  }
}

const mapStateToProps = state => ({
  listing: state.listings.singleListing
});

export default connect(
  mapStateToProps,
  { getSingleListing }
)(SingleListing);
