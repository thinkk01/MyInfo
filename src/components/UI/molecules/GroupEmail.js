import React from "react";
import "./style/GroupEmail.css";
import Input from "../atoms/input/input";
import Label from "../atoms/label/Label";
import Error from "../atoms/span/Error";
const GroupEmail = () => {
  return (
    <div class="form-group">
      <Label class="title-input no-select" value="email" text="Email" />
      <Input value="email" />
      <Error />
    </div>
  );
};

export default GroupEmail;
