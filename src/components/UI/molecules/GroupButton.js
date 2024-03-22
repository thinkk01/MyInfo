import React from "react";
import "./style/GroupButton.css";
import Button from "../atoms/button/button";
const GroupButton = () => {
  return (
    <div class="form-group btn">
      <Button class="btn-submit" value="submit" text="Create an account " />
      <p class="no-select">
        Already have an account? <a href="">Login</a>
      </p>
    </div>
  );
};

export default GroupButton;
