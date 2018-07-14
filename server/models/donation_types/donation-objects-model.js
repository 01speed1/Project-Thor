const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var donationObjectSchema = new Schema({
    type_object_id: { type: Schema.Types.ObjectId, ref: 'TypeObject' },
    quantity:       { type: Number , required: true },
    simbol:         { type: String, required: true, enum: ['unid']}
}, { collection: 'donation-object'})

module.exports = mongoose.model('DonationObject', donationObjectSchema)