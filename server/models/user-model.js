const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var userSchema = new Schema({
    name:     { type: String, required: true },
    lastname: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 5 },
    tag: {
        born: { type: Date },
        age:  { type: Number }
    },
    rh:       { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']},
    city:     { type: String },
    address:  { type: String, required: true },
    phone:    { type: String },
    rol:      { type: String , enum: ['administrator', 'collaborator', 'guest', 'sheriff' ], default: 'guest' },
    ubication:  {        
        ip:         { type: String },
        city:       { type: String },
        country_nanme: { type: String },
        latitud:    { type: Number },
        longitude:  { type: Number }
    },
    createdAt: { type: Date, default: Date.now }    
}, { collection: 'users'});

module.exports = mongoose.model('User', userSchema);

