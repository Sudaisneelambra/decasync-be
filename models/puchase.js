const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Types.ObjectId, 
        required: true,
    },
    orderQuantity: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    }
});

const purchaseOrderSchema = new mongoose.Schema({
    supplierName: {
        type: String,
        required: true,
    },
    purchaseId: {
        type: String,
        required: true,
    },
    orderItems: {
        type: [orderItemSchema], 
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    discountAmt: {
        type: Number,
        required: true,
    },
    totalAmt: {
        type: Number,
        required: true,
    },
    netAmount: {
        type: Number,
        required: true,
    },
});


const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

module.exports = PurchaseOrder;
