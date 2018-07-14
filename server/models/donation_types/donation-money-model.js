const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var donationMoneySchema = new Schema({
    quantity:       { type: Number , required: true },
    simbol:         { type: String, required: true, enum: ['Pesos', 'Dolares', 'Euros']}
}, { collection: 'donation-money'})  

module.exports = mongoose.model('DonationMoney', donationMoneySchema)