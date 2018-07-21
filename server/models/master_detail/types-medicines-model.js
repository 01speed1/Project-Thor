const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const typeMedicineSchema = new Schema({
    name:         { type: String, required: [true, 'Campo Obligatorio']},
    form:         { type: String, required: [true, 'Campo obligatorio '],enum: ['topico', 'inyectable', 'sólido', 'liquido'] },
    presentation: { type: String, required: [true, 'Campo Obligatorio'], enum: ['unidad', 'caja', 'sobre', 'frasco', 'tableta', 'ampolleta'] },    
    qsymbol:      { type: Number , required: true},
    symbol:       { type: String,  required: true, enum: ['mg', 'ml', 'gr', 'lt']},   
    created_at:   { type: Date, default: Date.now },
    update_at:    { type: Date, default: Date.now }

},{ collection: 'type-medicine'})

module.exports = mongoose.model('TypeMedicine', typeMedicineSchema);

