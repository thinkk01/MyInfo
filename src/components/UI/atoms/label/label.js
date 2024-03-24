import React from "react";
import "./Label.css";
const Label = (props) => {
  return (
    <label className={props.class} for={props.value}>
      {props.text}
    </label>
  );
};

export default Label;
