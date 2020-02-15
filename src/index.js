import React, { Suspense } from "react";
import { render } from "react-dom";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import MarvelService from "./services/MarvelService";
import App from "./App";
import ComicDetails from "./components/ComicDetails/ComicDetails";
import ReactGA from "react-ga";

//Initializing Google Analytics
ReactGA.initialize("UA-158586592-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const routes = mount({
  "/": route({
    view: App
  }),
  "/comic/:id": route(async req => {
    let comic = await MarvelService.getComic(req.params.id);
    let characters = [];
    if (comic[0].characters.items.length !== 0) {
      characters = await MarvelService.getCharactersOfComic(
        comic[0].characters.items
      );
    }
    return {
      view: (
        <ComicDetails
          title={comic[0].title}
          image={comic[0].thumbnail.path}
          pageCount={comic[0].pageCount}
          price={comic[0].pageCount}
          characters={characters}
          description={comic[0].description}
        />
      )
    };
  })
});

render(
  <Router routes={routes}>
    <Suspense fallback={"Loading"}>
      {/* <Toggler /> */}
      <View />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
