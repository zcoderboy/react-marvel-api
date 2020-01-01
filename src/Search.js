import React, { useEffect, useState } from "react";
import MarvelService from "./services/MarvelService";

const Search = () => {
  const [character, setCharacter] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(character != ''){
      MarvelService.getCharacterByName(character).then((hero)=>{
        setResult(hero) 
      })
    }
    return () => {};
  },[character]);

  return (
    <div>
      <input
        type="text"
        value={character}
        onChange={e => setCharacter(e.target.value)}
        placeholder="Search for Marvel heroes..."
      />
      <div>
      {
        result.map((item)=><h1 key={item.id}>{item.name}</h1>)
      }
      </div>
    </div>
  );
};

// function MarvelComicApi(character) {
//   MarvelService.getCharacterByName(character).then(data => {
//     console.log(data);
//   });
// }
export default Search;
