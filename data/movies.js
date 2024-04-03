//import axios, md5
import axios from "axios";
import helper from "../helpers.js";

export const searchMoviesByName = async (title) => {
  /*Function to make an axios call to search the api and return up to 20 movies matching the title param
  API endpoint: http://www.omdbapi.com/?apikey=CS546&s={title}
  */
  title = helper.checkString(title);

  const page1 = await axios.get(`http://www.omdbapi.com/?apikey=CS546&s=${title}`); //array
  const page2 = await axios.get(`http://www.omdbapi.com/?apikey=CS546&s=${title}&page=2`); //array

  if(page1.data.Response === "False") {
    throw new Error(`No movies found under ${title}`);
  }

  const page1list = page1.data.Search;
  let results;

  if(page2.data.Response === "True") {
    const page2list = page2.data.Search;
    results = page1list.concat(page2list);
  }
  else {
    results = page1list;
  }

  return results;
};

export const searchMovieById = async (id) => {
  /*Function to make an axios call to the the api matching the id
 API endpoint: http://www.omdbapi.com/?apikey=CS546&i={id}
  */
  id = helper.checkString(id);

  const { data } = await axios.get(`http://www.omdbapi.com/?apikey=CS546&i=${id}`);

  return data;
};
