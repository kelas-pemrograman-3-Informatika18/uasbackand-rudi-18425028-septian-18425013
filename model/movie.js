const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  judulFilm: {
    type: String
  },
  harga: {
    type: String
  },
  tahun: {
    type: String,
    default: new Date().getFullYear().toString
  },
  genre: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  deskripsi : {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('movie', movieSchema)