import React, { useState } from "react";
import axios from "axios";
import cookieParser from "cookie-parser";

const logout = () => {
  const removeCookie = (key) => {
    if (window !== "undifined") {
      cookieParser.remove(key, { expires: 1 });
    }
  };
  const logout = async () => {
    await axios({
      methode: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <li onClick={logout}>
      <img src=".img/icons/logout.svg" alt="alogout" />
    </li>
  );
};
export default logout;
