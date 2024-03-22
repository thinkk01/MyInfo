import React from "react";
import "./input.css";
const Input = (props) => {
  return (
    <input
      id={props.value}
      type={props.value}
      className="input-form mb-10"
      name={props.value}
    />
  );
};

export default Input;
