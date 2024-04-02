//import axios, md5
import axios from "axios";
import helper from "../helpers.js";

export const searchMoviesByName = async (title) => {
  /*Function to make an axios call to search the api and return up to 20 movies matching the title param
  API endpoint: http://www.omdbapi.com/?apikey=CS546&s={title}
  */
  title = helper.checkString(title);

  const { data } = await axios.get(`http://www.omdbapi.com/?apikey=CS546&s=${title}`);
};

export const searchMovieById = async (id) => {
  /*Function to make an axios call to the the api matching the id
 API endpoint: http://www.omdbapi.com/?apikey=CS546&i={id}
  */
};
