import React from "react";
import Register from "../templates/register";
import "./page.css";
import Cucmau from "../UI/atoms/cuc-mau/cuc-mau";
const PageRegister = () => {
  return (
    <section id="register-form" class="flex">
      <Cucmau />
      <Register />
    </section>
  );
};

export default PageRegister;
