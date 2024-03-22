import React from "react";
import "./form.css";
import GroupHeader from "../../molecules/GroupHeader";
import GroupEmail from "../../molecules/GroupEmail";
import GroupUsername from "../../molecules/GroupUsername";
import GroupCheckbox from "../../molecules/GroupCheckbox";
import GroupButton from "../../molecules/GroupButton";
import GroupPassword from "../../molecules/GroupPassword";
import GroupTitle from "../../molecules/GroupTitle";
const Form = () => {
  return (
    <div class="form w-6">
      <div class="w-665 w-auto">
        <form action="" id="form-input" class="form-input" method="">
          <GroupHeader />

          <GroupEmail />

          <GroupUsername />

          <GroupPassword />

          <GroupCheckbox />

          <GroupTitle />

          <GroupButton />
        </form>
      </div>
    </div>
  );
};

export default Form;
