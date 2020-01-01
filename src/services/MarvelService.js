import { sendRequest } from "../utils/Requester";

const BASE_URL = "https://gateway.marvel.com:443/v1/public";

const MarvelService = {
  getCharacterByName: name => {
    return sendRequest(
      `${BASE_URL}/characters?limit=5&nameStartsWith=${name}&apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  },
  getCharacterByID: ID => {
    return sendRequest(
      `${BASE_URL}/characters/${ID}?apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  },
  getComicsOfCharacter: ID => {
    return sendRequest(
      `${BASE_URL}/characters/${ID}/comics?apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  },
  getComics: () => {
    return sendRequest(
      `${BASE_URL}/comics?format=comic&dateRange=2010-01-01%2C2019-01-01&apikey=46adc9b9781ce41307cb74b00a292648`,
      "GET"
    );
  }
};

export default MarvelService;
