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
    return (
      <MDBContainer className="listing__container">
        <Link to="/">
          <MDBBtn color="indigo" className="btn-back">
            <MDBIcon className="mr-2" icon="long-arrow-alt-left" />
            Home
          </MDBBtn>
          <ListingInfo />
        </Link>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({
  listing: state.listings
});

export default connect(
  mapStateToProps,
  { getSingleListing }
)(SingleListing);
