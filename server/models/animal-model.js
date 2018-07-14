const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const typeAnimal = require('../models/master_detail/types-animals-model')
const typeRh     = require('../models/master_detail/types-rhs-model')
const typeBreed  = require('../models/master_detail/types-breeds-model')

var animalSchema = new Schema({
    name:       { type: String , required: true } ,
    typeAnimal: { type: Schema.Types.ObjectId, ref: 'Type' } ,
    typeRh:     { type: Schema.Types.ObjectId, ref: 'Rh' } ,
    typeBreed:  { type: Schema.Types.ObjectId, ref: 'Breed' } ,
    genre:      { type: String,  required: true, enum: ['Macho', 'Hembra'] } ,
    color:      { type: String , required: true } ,
    height:     { type: Number , required: true } ,
    typeHeight: { type: String , enum: ['Cm', 'Mt'] } ,
    weight:     { type: Number  } ,
    typeWeight: { type: String , enum: ['Gr', 'Lb', 'Kg'] } ,
    age:        { type: Number , required: true } ,
    state:      { type: String , required: true, } ,
    adopted:    { type: Boolean, default: false }
}, { collection: 'animals'})

module.exports = mongoose.model('Animal', animalSchema);