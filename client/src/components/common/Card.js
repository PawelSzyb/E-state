import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = props => {
  return (
    <MDBCard className="mb-5" style={{ width: "18rem" }}>
      <div className="card__price">${props.price}</div>
      <MDBCardImage
        className="img-fluid"
        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        waves
      />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBIcon icon="map-marker-alt" />
        <p style={{ display: "inline-block" }} className="ml-2 card__location">
          {props.location}
        </p>

        <ul className="card__info">
          <li className="card__info-item">
            <MDBIcon icon="th-large" className="mr-2" />
            Sq: {props.sq}
          </li>
          <li className="card__info-item">
            <MDBIcon icon="bed" className="mr-2" />
            Bedrooms: {props.bedrooms}
          </li>
          <li className="card__info-item">
            <MDBIcon icon="car-alt" className="mr-2" /> Garages: {props.garages}
          </li>
          <li className="card__info-item">
            <MDBIcon icon="bath" className="mr-2" />
            Bathrooms: {props.bathrooms}
          </li>
        </ul>
        <p className="card__info-realtor card__info">
          <li className="card__info-item">{props.realtor}</li>
          <li className="card__info-item">
            Created: <br />
            {props.added}
          </li>
        </p>

        <Link to={`/listings/${props.id}`}>
          <MDBBtn className="d-block mx-auto w-100" color="indigo">
            {props.btnName}
          </MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
