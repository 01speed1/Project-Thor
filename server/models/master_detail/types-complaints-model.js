var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var complaintSchema = new Schema({
    name:   { type: String, required: [true, 'Campo obligatorio'] }    
}, { collection: 'type-complaint'} );

module.exports = mongoose.model('TypeComplaint', complaintSchema);
