import React from "react";
import "./Character.css";

const Character = ({ character }) => {
  return (
    <div className="d-flex flex-column align-items-center pr-4">
      <img
        src={character.thumbnail.path + "/portrait_uncanny.jpg"}
        alt="character"
        className="character-img"
      />
      <span className="font-weight-bold mt-1">{character.name}</span>
    </div>
  );
};

export default Character;
