import React from "react";
import "./style/GroupPassword.css";
import Input from "../atoms/input/input";
import Label from "../atoms/label/Label";
import { FaCircle } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import Error from "../atoms/span/Error";
const GroupPassword = () => {
  return (
    <>
      <div class="form-group">
        <div class="flex">
          <Label
            class="title-input no-select"
            value="password"
            text="Password"
          />
          <span onclick="hideFunction()" class="flex-center hide-password">
            <BiHide className="icon-hide" />
            Hide
          </span>
        </div>
        <Input value="password" />
        <Error />
        <ul class="flex-wrap">
          <li
            id="password-character"
            class="title-password title-password-100 icon-center no-select"
          >
            <FaCircle className="icon" /> User 8 or more characters
          </li>
          <li
            id="password-upcase"
            class="title-password title-password-100 icon-center no-select"
          >
            <FaCircle className="icon" /> One Uppercase character
          </li>
          <li
            id="password-lowcase"
            class="title-password title-password-100 icon-center no-select"
          >
            <FaCircle className="icon" /> One lowcase character
          </li>
          <li
            id="password-special"
            class="title-password title-password-100 icon-center no-select"
          >
            <FaCircle className="icon" /> One special character
          </li>
          <li
            id="password-number"
            class="title-password title-password-100 icon-center no-select"
          >
            <FaCircle className="icon" /> One number
          </li>
        </ul>
      </div>
    </>
  );
};

export default GroupPassword;
