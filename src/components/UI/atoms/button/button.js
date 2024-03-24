import React from "react";

const Button = (props) => {
  return (
    <>
      <button type={props.value} className={props.class}>
        {" "}
        {props.text}{" "}
      </button>
    </>
  );
};

export default Button;
