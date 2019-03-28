import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBContainer,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">E-State</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <NavLink exact className="nav-link" to="/">
                  Home{" "}
                </NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <NavLink exact className="nav-link" to="/about">
                  About{" "}
                </NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <NavLink exact className="nav-link" to="/add">
                  Add{" "}
                </NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <NavLink exact className="nav-link" to="/featured-listings">
                  Featured Listings{" "}
                </NavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
