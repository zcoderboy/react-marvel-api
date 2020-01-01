import React, { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import "./Search.css";

const Search = () => {
  const [character, setCharacter] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (character != "") {
      MarvelService.getCharacterByName(character).then(hero => {
        setResult(hero);
      });
    } else {
      setResult([]);
    }
    return () => {};
  }, [character, setResult]);

  return (
    <div>
      <div className="form-inline">
        <div className="form-group mr-0">
          <label htmlFor="search">
            <input
              type="text"
              className="form-control search"
              id="search"
              value={character}
              onChange={e => setCharacter(e.target.value)}
              placeholder="Search for Marvel heroes..."
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-search">
          Go
        </button>
      </div>
      {
        <div className="result-box p-2 w-25" hidden={result.length === 0}>
          {result.map(item => (
            <h6 key={item.id}>{item.name}</h6>
          ))}
        </div>
      }
    </div>
  );
};

export default Search;
