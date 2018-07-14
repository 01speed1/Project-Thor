var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TypeRhSchema = new Schema({
    name:   { type: String, required: [true, 'Campo obligatorio'] }

}, { collection: 'type-rh'} );

module.exports = mongoose.model('Rh', TypeRhSchema);
