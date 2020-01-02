import React from "react";
import "./Comic.css";

export default function Comic({ comic }) {
  return (
    <div className="carousel-cell card comic mb-5">
      <img
        src={comic.thumbnail.path + "/portrait_uncanny.jpg"}
        className="card-img-top comic-img"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-around">
        <h6 className="card-title comic-title text-center font-weight-bold">
          {comic.title.split("(")[0]}
        </h6>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span>{comic.pageCount} pages</span>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span>{comic.prices[0].price} $</span>
          </div>
        </div>
      </div>
    </div>
  );
}
