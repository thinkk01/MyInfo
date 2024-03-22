import React from "react";
import "./style/GroupUsername.css";
import Label from "../atoms/label/Label";
import Input from "../atoms/input/input";
import Error from "../atoms/span/Error";
const GroupUsername = () => {
  return (
    <div class="form-group">
      <Label class="title-input no-select" value="username" text="Username" />
      <Input value="username" />
      <Error />
    </div>
  );
};
export default GroupUsername;
