import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox/dist/main";
import "./Lightbox.css";

import InfoList from "./InfoList";

class ListingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: [
        "https://mdbootstrap.com/img/Others/documentation/2.jpg",
        "https://mdbootstrap.com/img/Others/documentation/2.jpg",
        "https://mdbootstrap.com/img/Others/documentation/2.jpg",
        "https://mdbootstrap.com/img/Others/documentation/2.jpg"
      ]
    };
  }
  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" key={photoIndex}>
          <figure className="lightbox__figure">
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    });
  };

  render() {
    const { photoIndex, isOpen, images } = this.state;
    const { listing } = this.props;
    return (
      <MDBRow className="mb-5" style={{ marginTop: "30px" }}>
        <MDBCol md="8">
          <img
            src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
            className="img-fluid"
            alt=""
          />
          <MDBContainer className="mt-5 mb-5">
            <div className="mdb-lightbox">
              <MDBRow>{this.renderImages()}</MDBRow>
            </div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                imageTitle={photoIndex + 1 + "/" + images.length}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length
                  })
                }
              />
            )}
          </MDBContainer>
          <div className="info__container">
            <InfoList
              info1={{
                title: "Asking Price",
                icon: "money-bill-wave",
                value: listing.price
              }}
              info2={{
                title: "Bedrooms",
                icon: "bed",
                value: listing.bedrooms
              }}
              info3={{
                title: "Bathrooms",
                icon: "bath",
                value: listing.bathrooms
              }}
              info4={{
                title: "Garages",
                icon: "car-alt",
                value: listing.garages
              }}
            />
            <InfoList
              info1={{
                title: "Square meters",
                icon: "th-large",
                value: listing.sq
              }}
              info2={{
                title: "Lot size",
                icon: "drafting-compass",
                value: listing.lotSize
              }}
              info3={{
                title: "Listing Date",
                icon: "calendar-alt",
                value: listing.createdAt.substring(0, 10)
              }}
              info4={{
                title: "Realtor",
                icon: "user-tie",
                value: listing.realtor
              }}
            />
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default ListingInfo;
