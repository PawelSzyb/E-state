import React from "react";

const Form = () => {
  return (
    <div className=" input-group md-form form-sm form-1 pl-0">
      <div className="input-group-prepend">
        <span className="input-group-text indigo lighten-3" id="basic-text1" />
      </div>
      <input
        className="form-control my-0 py-1"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};

export default Form;
