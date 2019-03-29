import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";

class ListingInfo extends Component {
  render() {
    return (
      <MDBRow className="mb-12" style={{ marginTop: "30`px" }}>
        <MDBCol md="12">
          <img
            src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
            className="img-fluid"
            alt=""
          />
        </MDBCol>
      </MDBRow>
    );
  }
}

export default ListingInfo;
