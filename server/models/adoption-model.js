const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const animal = require('../models/animal-model');
const user   = require('../models/user-model');

var adoptionSchema = new Schema({
    animal:    { type: Schema.Types.ObjectId, ref: 'Animal'},
    user:      { type: Schema.Types.ObjectId, ref: 'User'},
    confirmed: { type: Boolean, default: false },
    created_at:{ type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
}, {collection: 'adoptions'})


module.exports = mongoose.model('Adoptions', adoptionSchema);