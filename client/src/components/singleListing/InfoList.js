import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";

const InfoList = ({ info1, info2, info3, info4 }) => {
  let content;
  if (info1 && info2 && info3 && info4) {
    content = (
      <MDBListGroup>
        <MDBListGroupItem>
          <div className="label indigo-text">
            <MDBIcon icon={info1.icon} className="mr-2" />
            {info1.title}
          </div>
          <div className="value">{info1.value}</div>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <div className="label indigo-text">
            <MDBIcon icon={info2.icon} className="mr-2" />
            {info2.title}
          </div>
          <div className="value">{info2.value}</div>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <div className="label indigo-text">
            <MDBIcon icon={info3.icon} className="mr-2" /> {info3.title}
          </div>
          <div className="value">{info3.value}</div>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <div className="label indigo-text">
            <MDBIcon icon={info4.icon} className="mr-2" />
            {info4.title}
          </div>
          <div className="value">{info4.value}</div>
        </MDBListGroupItem>
      </MDBListGroup>
    );
  } else {
    content = null;
  }

  return content;
};

export default InfoList;
