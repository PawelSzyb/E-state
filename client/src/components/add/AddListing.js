import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import Input from "../common/Input";
import "./AddListing.css";

class AddListing extends Component {
  state = {
    title: "",
    location: "",
    bedrooms: 0,
    garages: 0,
    bathrooms: 0,
    sq: 0
  };
  onClickHandle = () => {
    fetch("http://localhost:5000/listings/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        location: this.state.location,
        bedrooms: this.state.bedrooms,
        garages: this.state.garages,
        bathrooms: this.state.bathrooms,
        sq: this.state.sq
      })
    })
      .then(res => res.json())
      .then(listing => console.log(listing))
      .catch(error => console.log(error));
    this.setState({
      title: "",
      location: "",
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
              name="garages"
              value={this.state.garages}
              onChange={this.onChangeHandle}
              label="Garages"
              type="number"
            />
            <Input
              name="bedrooms"
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
                className="btn-search"
                onClick={this.onClickHandle}
              >
                Add
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddListing;
