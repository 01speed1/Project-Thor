const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const typeDonation     = require('../models/master_detail/types-donations-model')
const user     =  require('./user-model');

var donationSchema = new Schema({
    type_donation: [ { type: Schema.Types.ObjectId, ref: 'TypeDonation' } ],
    donations:     [ { type: Schema.Types.ObjectId } ],
    user:          { type: Schema.Types.ObjectId, ref: 'User'},
    confirmed:     { type: Boolean, default: false },
    created_at:    { type: Date, default: Date.now }
});


module.exports = mongoose.model('Donation', donationSchema);