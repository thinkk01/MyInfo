import React from "react";
import "./style/GroupHeader.css";
import Span from "../atoms/label/Label";
const GroupHeader = () => {
  return (
    <div class="form-group">
      <h1 class="no-select">Welcome to Design Community</h1>
      <p class="form-description no-select">
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  );
};

export default GroupHeader;
