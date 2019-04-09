import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import PropTypes from "prop-types";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCard
} from "mdbreact";

import { addListing } from "../../actions/listingsActions";

import Input from "../common/Input";
import "./AddListing.css";

class AddListing extends Component {
  state = {
    title: "",
    location: "",
    price: 0,
    bedrooms: 0,
    garages: 0,
    bathrooms: 0,
    sq: 0,
    realtor: "",
    lotSize: 0,
    errors: {}
  };

  onClickHandle = () => {
    const listingData = JSON.stringify({
      title: this.state.title,
      location: this.state.location,
      price: this.state.price,
      bedrooms: this.state.bedrooms,
      garages: this.state.garages,
      bathrooms: this.state.bathrooms,
      sq: this.state.sq,
      realtor: this.state.realtor,
      lotSize: this.state.lotSize
    });
    this.props.addListing(listingData, this.props.history);
    if (!this.state.errors) {
      this.setState({
        title: "",
        location: "",
        price: 0,
        bedrooms: 0,
        garages: 0,
        bathrooms: 0,
        sq: 0,
        realtor: "",
        lotSize: 0
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.errors, this.props.errors)) {
      this.setState({
        errors: this.props.errors.errors
      });
    }
  }

  onChangeHandle = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <MDBContainer style={{ marginTop: "120px", marginBottom: "120px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <Input
                  name="title"
                  value={this.state.title}
                  onChange={this.onChangeHandle}
                  title="Add Listing"
                  label="Title"
                  type="text"
                />
                {this.state.errors.title ? (
                  <div className="invalid-feedback">
                    Please provide a title.
                  </div>
                ) : null}
                <Input
                  name="location"
                  value={this.state.location}
                  onChange={this.onChangeHandle}
                  label="Location"
                  type="text"
                />
                {this.state.errors.location ? (
                  <div className="invalid-feedback">
                    Please provide a location.
                  </div>
                ) : null}
                <Input
                  name="realtor"
                  value={this.state.realtor}
                  onChange={this.onChangeHandle}
                  label="Realtor"
                  type="text"
                />
                {this.state.errors.realtor ? (
                  <div className="invalid-feedback">
                    Please provide a realtor.
                  </div>
                ) : null}
                <Input
                  name="price"
                  value={this.state.price}
                  onChange={this.onChangeHandle}
                  label="Price"
                  type="string"
                />
                {this.state.errors.price ? (
                  <div className="invalid-feedback">
                    Please provide a valid price.
                  </div>
                ) : null}
                <Input
                  name="garages"
                  value={this.state.garages}
                  onChange={this.onChangeHandle}
                  label="Garages"
                  type="number"
                />
                {this.state.errors.garages ? (
                  <div className="invalid-feedback">
                    Please provide a valid number.
                  </div>
                ) : null}
                <Input
                  name="bedrooms"
                  value={this.state.bedrooms}
                  onChange={this.onChangeHandle}
                  label="Bedrooms"
                  type="number"
                />
                {this.state.errors.bedrooms ? (
                  <div className="invalid-feedback">
                    Please provide a valid number.
                  </div>
                ) : null}
                <Input
                  name="bathrooms"
                  value={this.state.bathrooms}
                  onChange={this.onChangeHandle}
                  label="Bathrooms"
                  type="number"
                />
                {this.state.errors.bathrooms ? (
                  <div className="invalid-feedback">
                    Please provide a valid number.
                  </div>
                ) : null}
                <Input
                  name="sq"
                  value={this.state.sq}
                  onChange={this.onChangeHandle}
                  label="Measurement"
                  type="number"
                />
                {this.state.errors.sq ? (
                  <div className="invalid-feedback">
                    Please provide a measurement.
                  </div>
                ) : null}
                <Input
                  name="lotSize"
                  value={this.state.lotSize}
                  onChange={this.onChangeHandle}
                  label="Lot Size"
                  type="number"
                />
                {this.state.errors.lotSize ? (
                  <div className="invalid-feedback">
                    Please provide a lot size.
                  </div>
                ) : null}
                <div className="text-center mt-4">
                  <MDBBtn
                    type="submit"
                    className="btn-search w-100"
                    color="indigo"
                    onClick={this.onClickHandle}
                  >
                    Add
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

AddListing.protoTypes = {
  addListing: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { addListing }
)(withRouter(AddListing));
