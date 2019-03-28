import React, { Component } from "react";
import { MDBCol, MDBBtn } from "mdbreact";
import InputGroup from "../common/InputGroup";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      city: "",
      country: "",
      bedrooms: "",
      price: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <MDBCol className="search" md="10">
        <InputGroup
          className={"input-keyword"}
          placeholder={"Keyword (Pool, Garage, etc)"}
          name={"keyword"}
          onChange={this.onChange}
          value={this.state.keyword}
        />
        <InputGroup
          className={"input-city"}
          placeholder={"City"}
          name={"city"}
          onChange={this.onChange}
          value={this.state.city}
        />
        <InputGroup
          className={"input-country"}
          placeholder={"Country"}
          name={"country"}
          onChange={this.onChange}
          value={this.state.country}
        />
        <InputGroup
          className={"input-bedrooms"}
          placeholder={"Bedrooms"}
          name={"bedrooms"}
          onChange={this.onChange}
          value={this.state.bedrooms}
        />
        <InputGroup
          className={"input-price"}
          placeholder={"Max Price"}
          name={"price"}
          onChange={this.onChange}
          value={this.state.price}
        />
        <MDBBtn className="btn-search">Search</MDBBtn>
      </MDBCol>
    );
  }
}

export default Search;
