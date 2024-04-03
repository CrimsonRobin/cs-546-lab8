//import express and express router as shown in lecture code and worked in previous labs.  Import your data functions from /data/movies.js that you will call in your routes below
import express from "express";
import helper from "../helpers.js";
import {searchMovieById, searchMoviesByName} from "../data/movies.js";

const router = express.Router();

router.route('/').get(async (req, res) => {
  //code here for GET will render the home handlebars file
  try {
    res.render("home");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.route('/searchmovies').post(async (req, res) => {
  //code here for POST this is where your form will be submitting searchMoviesByName and then call your data function passing in the 
  //searchMoviesByName and then rendering the search results of up to 20 Movies.
  try {
    req.body.searchMoviesByName = helper.checkString(req.body.searchMoviesByName);
    const result = await searchMoviesByName(req.body.searchMoviesByName);
    res.render("movieSearchResults", {movies: result});
  } catch (error) {
    res.status(404).json(error.message);
  }

});

router.route('/movie/:id').get(async (req, res) => {
  //code here for GET a single movie
  try {
    req.params.id = helper.checkString(req.params.id);
    const movie = await searchMovieById(req.params.id);
    res.render("movieById", {movie: movie});
  } catch (error) {
    res.status(404).json(error.message);
  }
});

//export router
export default router;