const mongoose = require('mongoose');

// Define the Item schema
const itemSchema = new mongoose.Schema({
    itemNo: {
        type: Number,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    inventoryLocation: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    stockUnit: {
        type: String,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    itemImages: [{
        type: String,
        required: true,
    }],
    status: {
        type: String,
        default: 'Enabled', 
    },
});

// Create the Item model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
