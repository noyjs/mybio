import React from "react";

import imgSrc from "../../images/image.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img className={classes.profilePicture} src={imgSrc} alt="Noy Agasi" />
      </div>
      <div className={classes.profileContent}>
        <h1>Noy Agasi</h1>
        <h2>
          Full Stack Developer (Frontend oriented) based in Rishon LeZion,
          Israel.
        </h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
