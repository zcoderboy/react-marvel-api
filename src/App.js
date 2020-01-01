import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Comic from "./components/Comic/Comic";
import Search from "./Search";
import MarvelService from "./services/MarvelService";

const App = () => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    MarvelService.getComics().then(data => {
      setComics(data);
    });
  }, [setComics]);
  return (
    <div className="container">
      <Search />
      <div className="d-flex flex-wrap justify-content-between">
        {comics.map(comic => (
          <Comic key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
