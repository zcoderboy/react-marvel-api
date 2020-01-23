import React, { useEffect, useState } from "react";
import Comic from "./components/Comic/Comic";
import Search from "./components/Search/Search";
import MarvelService from "./services/MarvelService";
import "./App.css";
import Toggler from "./components/Toggler/Toggler";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [comics, setComics] = useState([]);
  // let navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      let data = await MarvelService.getComics();
      setComics(data);
      let elem = document.querySelector(".carousel");
      // eslint-disable-next-line no-undef
      new Flickity(elem, {
        cellAlign: "center",
        contain: true
      });
    }
    fetchData();
  }, [setComics]);
  return (
    <ThemeContext.Provider value="dodgerblue">
      <div>
        <div className="d-flex justify-content-between">
          <Search />
          <Toggler defaultMode="dark" />
        </div>
        <h3 className="text-center mb-4 display-4">Comic Books</h3>
        {comics.length !== 0 && (
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
    </ThemeContext.Provider>
  );
};

export default App;
