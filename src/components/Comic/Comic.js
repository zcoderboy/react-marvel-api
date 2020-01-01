import React from "react";
import "./Comic.css";

export default function Comic({ comic }) {
  return (
    <div className="card comic shadow mr-3 mb-5">
      <img
        src={comic.thumbnail.path + "/portrait_incredible.jpg"}
        className="card-img-top comic-img"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-around">
        <h6 className="card-title comic-title text-center font-weight-bold">
          {comic.title.split("(")[0]}
        </h6>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center justify-content-center">
            {/* <i className="fa fa-book-open"></i> */}
            <span>{comic.pageCount} pages</span>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {/* <i className="fa fa-money-bill-wave"></i> */}
            <span>{comic.prices[0].price} $</span>
          </div>
        </div>
      </div>
    </div>
    /* <div className="comic">
      
    </div> */
  );
}
