const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const typeMedicine = require('../master_detail/types-medicines-model')

var donationMedicineSchema = new Schema({
    typeMedicine: { type: Schema.Types.ObjectId, ref: 'TypeMedicine', required: [true, 'Campo obligatorio ']},    
    quantity:   { type: Number, required: [true, 'Campo obligatorio ']},    
    lote:       { type: String, required: [true, 'Campo obligatorio ']},    
    expires:    { type: Date,   required: [true, 'Campo obligatorio ']},
    laboratory: { type: String, required: [true, 'Campo obligatorio ']},
    created_at: { type: Date, default: Date.now },
    update_at:  { type: Date, default: Date.now }
    
}, { collection: 'donation-medicine'})

module.exports = mongoose.model('DonationMedicine', donationMedicineSchema)