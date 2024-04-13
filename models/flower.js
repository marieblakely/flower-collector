import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flowerSchema = new Schema({
  name: String,
  type: {type: String, enum: ['Perennial', 'Non-Perennial']},
  planted: Boolean,
  photo: String
}, {
  timestamps: true
})

const Flower = mongoose.model('Flower', flowerSchema)

export {
  Flower
}