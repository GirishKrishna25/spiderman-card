import React from "react";

export default function Details() {
  return (
    <div>
      <div className="img-container">
        <img
          className="img"
          src={require("../resources/spiderman.png")}
          alt="person profile"
        />
      </div>
      <div className="details">
        <h2 className="details--name">SPIDER-MAN</h2>
        <p className="details--aka">
          A.K.A <strong>Peter Parker</strong>
        </p>
        <p className="details--website">
          <a href="https://www.marvel.com/characters/spider-man-peter-parker/on-screen/profile">
            spiderman/website
          </a>
        </p>
        <div className="btn-container">
          <button className="btn btn-email">
            <img
              className="btn--icon"
              src={require("../resources/Mail.png")}
              alt="mail icon"
            />
            <span className="btn--text">Email</span>
          </button>
          <button className="btn btn-linkedin">
            <img
              className="btn--icon"
              src={require("../resources/LinkedInIcon.png")}
              alt="mail icon"
            />
            <span className="btn--text">LinkedIn</span>
          </button>
        </div>
      </div>
    </div>
  );
}
