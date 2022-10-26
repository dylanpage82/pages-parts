const mongoose = require('mongoose')

const partSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manufacture: { type: String },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }
})

const Part = mongoose.model('Part', partSchema)

module.exports = Part
