//Create MODEL so use Mongoose 
const mongoose = require ('mongoose');
const { Schema, model } = mongoose;
const movieSchema = new Schema (
  {
    title: String, 
    director: String, 
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
  }, {
    timestamps: true // to record created at & updated at 
  }
)
module.exports = model('Movie', movieSchema);