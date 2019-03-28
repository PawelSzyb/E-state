import React from "react";
import Carousel from "../layout/Carousel";
import Search from "./Search";
import Latest from "../latest/Latest";

const Index = () => {
  return (
    <React.Fragment>
      <div className="position-relative">
        <Carousel />
        <Search />
      </div>
      <Latest />
    </React.Fragment>
  );
};

export default Index;
