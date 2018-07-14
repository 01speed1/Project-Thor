var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var typeSchema = new Schema({
    name:  { 
        type: String, required: [true, 'Campo obligatorio ']
    }
}, { collection: 'type-animals'} );

module.exports = mongoose.model('Type', typeSchema);
