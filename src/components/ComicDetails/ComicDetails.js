import React from "react";
import "./ComicDetails.css";
import Character from "../Character/Character";
import Toggler from "../Toggler/Toggler";

const ComicDetails = ({
  title,
  image,
  pageCount,
  price,
  characters,
  description
}) => {
  return (
    <div className="details">
      <div className="d-flex justify-content-between">
        <Toggler defaultMode="dark" />
      </div>
      <div className="d-flex mt-5 details-wrapper">
        <div className="comic-img-detail shadow">
          <img
            src={image + "/portrait_uncanny.jpg"}
            className="card-img-top rounded h-100"
            alt="..."
          />
        </div>
        <div className="mx-5 w-100 align-self-center ">
          <h2 className="text-underline display-3">{title.split("(")[0]}</h2>
          <h4>
            {pageCount === 0
              ? "Number of pages unavailable"
              : `${pageCount} pages`}
          </h4>
          <h4>{price === 0 ? "Price unavailable" : `${price} $`}</h4>
          <p className="lead my-3">{description}</p>
          {characters.length !== 0 && (
            <div className="mt-4 characters-wrapper">
              <h5 className="mb-3">Characters</h5>
              <div className="d-flex characters">
                {characters.map(character => (
                  <Character key={character.id} character={character} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComicDetails;
