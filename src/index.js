import React, { Suspense } from "react";
import { render } from "react-dom";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import MarvelService from "./services/MarvelService";
import App from "./App";
import ComicDetails from "./components/ComicDetails/ComicDetails";

const routes = mount({
  "/": route({
    view: App
  }),
  "/comic/:id": route(async req => {
    let comic = await MarvelService.getComic(req.params.id);
    let characters = await MarvelService.getCharactersOfComic(
      comic[0].characters.items
    );
    // console.log(characters);
    return {
      view: (
        <ComicDetails
          title={comic[0].title}
          image={comic[0].thumbnail.path}
          pageCount={comic[0].pageCount}
          price={comic[0].pageCount}
          characters={characters}
        />
      )
    };
  })
});

render(
  <Router routes={routes}>
    <Suspense fallback={null}>
      <View />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
