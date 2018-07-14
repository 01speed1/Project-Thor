const mongoose = require('mongoose');
const Schema   =  mongoose.Schema;

var schemaTypeObject = new Schema({
    name: { type: String, required: [true, 'Campo obligatorio'] }
}, {collection: 'type-object' })

module.exports = mongoose.model('TypeObject', schemaTypeObject);