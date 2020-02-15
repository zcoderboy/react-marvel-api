import React from "react";
import "./ComicDetails.css";
import Character from "../Character/Character";
import Toggler from "../Toggler/Toggler";
import Search from "../Search/Search";
import { Link } from "react-navi";
import ReactGA from "react-ga";

//Initializing Google Analytics
ReactGA.initialize("UA-158586592-1");
ReactGA.pageview(window.location.pathname + window.location.search);

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
        <Search />
        <Toggler defaultMode="dark" />
      </div>
      <div className="d-flex mt-5 details-wrapper">
        <div className="comic-img-detail shadow">
          <img
            src={"https://" + image.split("//")[1] + "/portrait_uncanny.jpg"}
            className="card-img-top rounded h-100"
            alt="..."
          />
        </div>
        <div className="mx-5 w-100 align-self-center ">
          <h2 className="text-underline display-4">{title.split("(")[0]}</h2>
          <h4>
            {pageCount === 0
              ? "Number of pages unavailable"
              : `${pageCount} pages`}
          </h4>
          <h4>{price === 0 ? "Price unavailable" : `${price} $`}</h4>
          <p className="lead my-3">
            {description ? description : "No description available"}
          </p>
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
          <div className="characters-wrapper">
            <Link href="/" className="btn btn-outline-dark mt-4 back-button">
              <i className="fa fa-arrow-left mr-2"></i>Head to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDetails;
