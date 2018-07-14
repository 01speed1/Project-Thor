var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var types    = require('./types-animals-model');

var breedSchema = new Schema({
    name:   { type: String, required: [true, 'Campo obligatorio '] },    
    animal: { type: Schema.Types.ObjectId, ref: 'Type' }
    
}, { collection: 'type-breeds'} );

module.exports = mongoose.model('Breed', breedSchema);
