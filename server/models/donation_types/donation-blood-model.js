const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var donationBloodSchema = new Schema({
    type:       { type: String },
    rh_id:      { type: Schema.Types.ObjectId, ref: 'Rh' },
    quantity:   { type: Number , required: true },
    symbol:     { type: String, required: true, enum: ['lt', 'ml']}
}, { collection: 'donation-blood'})

module.exports = mongoose.model('DonationBlood', donationBloodSchema)