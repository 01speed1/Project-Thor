const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var complaintSchema = new Schema({
    user_id:        {   type: Schema.Types.ObjectId, 
                        ref: 'User', 
                        required:true },
    type_complaint:  {  type: Schema.Types.ObjectId, 
                        ref: 'TypeComplaint', 
                        required:true  },
    ubication:  {        
        ip:         { type: String },
        city:       { type: String },
        country_nanme: { type: String },
        latitud:    { type: Number },
        longitude:  { type: Number }
    },
    verified:       { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now } 

},{ collection: 'complaints'})

module.exports = mongoose.model('Complaint', complaintSchema);