const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplierNo: { type: Number, required:true}, 
    supplierName: { type: String, required: true },
    address: { type: String },
    taxNo: { type: String },
    country: { type: String, required: true }, 
    mobileNo: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Inactive', 'Blocked'], default: 'Active' },
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
