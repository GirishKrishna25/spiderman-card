import React from "react";

export default function Contact() {
  return (
    <div className="contact_container">
      <div className="contact">
        <ul>
          <li>
            <img
              src={require("../resources/FacebookIcon.png")}
              alt="facebook icon"
            />
          </li>
          <li>
            <img
              src={require("../resources/InstagramIcon.png")}
              alt="Instagram icon"
            />
          </li>
          <li>
            <img
              src={require("../resources/TwitterIcon.png")}
              alt="Twitter icon"
            />
          </li>
          <li>
            <img
              src={require("../resources/GithubIcon.png")}
              alt="Github icon"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
