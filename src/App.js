import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Comic from "./components/Comic/Comic";
import Search from "./components/Search/Search";
import MarvelService from "./services/MarvelService";
import "./App.css";

const App = () => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let datas = await MarvelService.getComics();
      setComics(datas);
      var elem = document.querySelector(".carousel");
      // eslint-disable-next-line no-undef
      new Flickity(elem, {
        cellAlign: "left",
        contain: true
      });
    }
    fetchData();
  }, [setComics]);
  return (
    <div className="wrapper pt-3">
      <Search />
      <h3 className="text-center mb-4">Comic Books</h3>
      {comics.length != 0 && (
        <div
          className="carousel"
          data-flickity='{ "cellAlign": "left", "contain": true }'
        >
          {comics.map(comic => (
            <Comic key={comic.id} comic={comic} />
          ))}
        </div>
      )}
    </div>
    // <div className="container mt-3">
    //   <Search />
    //   <h3 className="text-center mb-4">Comics of the last decade</h3>
    //   <div className="d-flex flex-wrap justify-content-between">
    //     {comics.map(comic => (
    //       <Comic key={comic.id} comic={comic} />
    //     ))}
    //   </div>
    // </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
