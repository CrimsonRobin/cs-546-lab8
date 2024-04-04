//import express and express router as shown in lecture code and worked in previous labs.  Import your data functions from /data/movies.js that you will call in your routes below
import express from "express";
import helper from "../helpers.js";
import {searchMovieById, searchMoviesByName} from "../data/movies.js";

const router = express.Router();

router.route('/').get(async (req, res) => {
  //code here for GET will render the home handlebars file
  try {
    return res.status(200).render("home", {title: "Movie Finder"});
  } catch (e) {
    return res.status(500).json({error: e.message});
  }
});

router.route('/searchmovies').post(async (req, res) => {
  //code here for POST this is where your form will be submitting searchMoviesByName and then call your data function passing in the 
  //searchMoviesByName and then rendering the search results of up to 20 Movies.
  try {
    req.body.searchMoviesByName = helper.checkString(req.body.searchMoviesByName);
  } catch (e) {
    return res.status(400).render("error", {title: "Movie Finder", class: "error", error: e.message});
  }
  try {
    const result = await searchMoviesByName(req.body.searchMoviesByName);
    return res.status(200).render("movieSearchResults", {title: "Movies Found", searchMoviesByName: req.body.searchMoviesByName, movies: result});
  } catch (e) {
    return res.status(404).render("error", {title: "Movie Finder", class: "not-found", error: e.message});
  }

});

router.route('/movie/:id').get(async (req, res) => {
  //code here for GET a single movie
  try {
    req.params.id = helper.checkString(req.params.id);
    const movie = await searchMovieById(req.params.id);
    return res.status(200).render("movieById", {title: movie.Title, movie: movie});
  } catch (e) {
    return res.status(404).render("error", {title: "Movie Finder", class: "error", error: e.message});
  }
});

//export router
export default router;