import React from "react";
import Label from "../atoms/label/Label";
import Input from "../atoms/input/input";
import Error from "../atoms/span/Error";
const GroupCheckbox = () => {
  return (
    <div class="form-group flex form-group-checkbox">
      <Input value="checkbox" />
      <p class="no-select">
        I want to receive emails about the product, feature updates, events and
        marketting promotions.
      </p>
      <Error />
    </div>
  );
};

export default GroupCheckbox;
