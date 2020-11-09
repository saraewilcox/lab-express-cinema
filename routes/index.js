const express = require('express');
const Movie = require('../models/moviesmodel');
const { route } = require('../routes');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => { 
    res.render('index')
});

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((allTheMovieFromDB) => {
      console.log(allTheMovieFromDB);
      res.render('movies', { movies: allTheMovieFromDB})
  });
});

//this is a route that receives a route param (colon and our name of choice)
router.get('/movies/:id', function (req, res, next) {
  Movie.find()
  .then((allTheMovieFromDB) => {
    console.log(allTheMovieFromDB);
    res.render('movie-details', { movies: allTheMovieFromDB})
});

}); 


module.exports = router;