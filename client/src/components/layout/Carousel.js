import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";

import "./Carousel.css";

const Carousel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={false}
      interval={10000}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img className="d-block slide-img " alt="First slide" />
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="2">
          <MDBView>
            <img className="d-block slide-img slide-two " alt="Third slide" />
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block slide-img slide-three"
              alt="Mattonit's item"
            />
            <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;
