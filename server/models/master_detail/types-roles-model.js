const mongoose = require('mongoose');
const Schema   =  mongoose.Schema;

var schemaTypeRoles= new Schema({
    name: { type: String, required: [true, 'Campo obligatorio'] },
    type: { type: Number, required: [true, 'Campo obligatorio'] }
}, {collection: 'type-rol' })

module.exports = mongoose.model('TypeRol', schemaTypeRoles);