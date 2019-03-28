import React from "react";

const InputGroup = props => {
  return (
    <div
      className={`input-group InputGroup form-sm form-1 pl-0 ${
        props.className
      } `}
    >
      <input
        className="form-control my-0 py-1 "
        type="text"
        placeholder={props.placeholder}
        aria-label="Search"
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputGroup;
