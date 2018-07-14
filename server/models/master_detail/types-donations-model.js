const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaTypeDonation = new Schema({
    name: { type: String, required: [true, 'Campo obligatorio'] }
}, {collection: 'type-donation' })

module.exports = mongoose.model('TypeDonation', schemaTypeDonation);