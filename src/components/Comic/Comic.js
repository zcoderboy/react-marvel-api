import React from "react";
import "./Comic.css";

export default function Comic({ comic }) {
  return (
    <div className="card comic shadow mx-3 mb-5">
      <img
        src={comic.thumbnail.path + "/portrait_incredible.jpg"}
        className="card-img-top comic-img"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title comic-title">{comic.title}</h5>
        <p className="card-text comic-desc">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          See more
        </a>
      </div>
    </div>
    /* <div className="comic">
      
    </div> */
  );
}
