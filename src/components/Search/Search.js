import React, { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import "./Search.css";
import { Link } from "react-navi";

const Search = () => {
  const [comic, setComic] = useState("");
  const [result, setResult] = useState([]);
  // const theme = useContext(ThemeContext);
  useEffect(() => {
    if (comic != "") {
      MarvelService.getComicByTitle(comic).then(result => {
        setResult(result);
      });
    } else {
      setResult([]);
    }
    return () => {};
  }, [comic, setComic]);

  return (
    <div className="w-25 w-md-75">
      <label htmlFor="search" className="w-100 m-0">
        <input
          type="text"
          className="form-control search"
          id="search"
          value={comic}
          onChange={e => setComic(e.target.value)}
          placeholder="Search for Marvel comics..."
        />
      </label>
      {result.length != 0 && (
        <div
          className="result-box p-2 d-flex flex-column"
          hidden={result.length === 0}
        >
          {result.map(item => (
            <Link
              key={item.id}
              href={"/comic/" + item.id}
              onClick={() => {
                setResult([]);
                setComic("");
              }}
            >
              {item.title.split("(")[0]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
