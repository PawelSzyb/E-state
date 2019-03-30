import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
    sq: 0
  };

  onClickHandle = () => {
    const listingData = JSON.stringify({
      title: this.state.title,
      location: this.state.location,
      price: this.state.price,
      bedrooms: this.state.bedrooms,
      garages: this.state.garages,
      bathrooms: this.state.bathrooms,
      sq: this.state.sq
    });
    this.props.addListing(listingData, this.props.history);
    this.setState({
      title: "",
      location: "",
      price: 0,
      bedrooms: 0,
      garages: 0,
      bathrooms: 0,
      sq: 0
    });
  };

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
                <Input
                  name="location"
                  value={this.state.location}
                  onChange={this.onChangeHandle}
                  label="Location"
                  type="text"
                />
                <Input
                  name="price"
                  value={this.state.price}
                  onChange={this.onChangeHandle}
                  label="Price"
                  type="number"
                />
                <Input
                  name="garages"
                  value={this.state.garages}
                  onChange={this.onChangeHandle}
                  label="Garages"
                  type="number"
                />
                <Input
                  name="Bedrooms"
                  value={this.state.bedrooms}
                  onChange={this.onChangeHandle}
                  label="bedrooms"
                  type="number"
                />
                <Input
                  name="bathrooms"
                  value={this.state.bathrooms}
                  onChange={this.onChangeHandle}
                  label="Bathrooms"
                  type="number"
                />
                <Input
                  name="sq"
                  value={this.state.sq}
                  onChange={this.onChangeHandle}
                  label="Measurement"
                  type="number"
                />

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

const mapStateToProps = state => ({});

AddListing.protoTypes = {
  addListing: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { addListing }
)(withRouter(AddListing));
