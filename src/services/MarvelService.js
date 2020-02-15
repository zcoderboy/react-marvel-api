import { sendRequest } from "../utils/Requester";

const BASE_URL = "https://gateway.marvel.com:443/v1/public";

async function asyncForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i);
  }
}

const MarvelService = {
  getComicByTitle: name => {
    return sendRequest(
      `${BASE_URL}/comics?limit=5&titleStartsWith=${name}&apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  },
  getCharacter: resource => {
    return sendRequest(
      `https://${
        resource.split("//")[1]
      }?apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  },
  getCharactersOfComic: characterArray => {
    return new Promise((resolve, reject) => {
      let characters = [];
      (async function() {
        await asyncForEach(characterArray, async item => {
          let character = await MarvelService.getCharacter(item.resourceURI);
          characters.push(character[0]);
        });
        characters ? resolve(characters) : reject("An error occured...");
      })();
    });
  },
  getComics: () => {
    return sendRequest(
      `${BASE_URL}/comics?format=comic&dateRange=2000-01-01%2C2019-01-01&apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  },
  getComic: id => {
    return sendRequest(
      `${BASE_URL}/comics/${id}?apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  }
};

export default MarvelService;
