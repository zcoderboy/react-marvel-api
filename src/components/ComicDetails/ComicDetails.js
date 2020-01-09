import React from "react";
import Search from "../Search/Search";
import "./ComicDetails.css";

const ComicDetails = ({ title, image, pageCount, price, characters }) => {
  return (
    <div>
      <Search />
      <div className="d-flex mt-4">
        <div className="comic-img shadow">
          <img
            src={image + "/portrait_uncanny.jpg"}
            className="card-img-top comic-img rounded"
            alt="..."
          />
        </div>
        <div className="mx-5">
          <h2 className="text-underline">{title.split("(")[0]}</h2>
          <h4>{pageCount} pages</h4>
          <h4>{price} $</h4>
          <div>
            <h5>Characters</h5>
            <div className="d-flex">
              {/* {console.log(characters)} */}
              <span key={characters[0].id}>{characters[0].name}</span>
              {characters.map(character => (
                <span key={character.id}>{character.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDetails;
