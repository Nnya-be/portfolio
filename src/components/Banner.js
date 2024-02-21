import React from "react";
import "../styles/banner.scss";
import NavButton from "./NavButton";
import "../styles/navigation.scss";
import pic from "../styles/profile.png"
import blob from "../styles/blob.svg"
function Banner() {
  return (
    <div className="banner">
      <div className="banner-info">
        <h1 className="banner-info__heading"> Hello, I'm Solomon Chamamme</h1>
        <p className="banner-info__text">
          Versatile and experienced software engineer with a proven track record
          of delivering innovative solutions. I thrive in collaborative
          environments, bringing effective communication and a problem-solving
          mindset to every project. Committed to staying ahead of industry
          trends, I contribute a passion for excellence to drive project
          success.
        </p>
        <NavButton value='dark'></NavButton>
      </div>
      <div className="banner-display">
        <img alt='Profile picture' src={pic} className="banner-display__profile"></img>
        <img alt="blob" src={blob} className="banner-display__blob"></img>
      </div>
    </div>
  );
}

export default Banner;
