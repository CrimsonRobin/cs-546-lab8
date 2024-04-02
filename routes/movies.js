//import express and express router as shown in lecture code and worked in previous labs.  Import your data functions from /data/movies.js that you will call in your routes below

router.route('/').get(async (req, res) => {
  //code here for GET will render the home handlebars file
});

router.route('/searchmovies').post(async (req, res) => {
  //code here for POST this is where your form will be submitting searchMoviesByName and then call your data function passing in the searchMoviesByName and then rendering the search results of up to 20 Movies.
});

router.route('/movie/:id').get(async (req, res) => {
  //code here for GET a single movie
});

//export router
