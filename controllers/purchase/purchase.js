const purchase = require('../../models/puchase'); 

/**
 * Author: Sudais
 * Date: 28-10-2024
 * Hint: Creating purchase
 */

const createPurchase = async (req, res) => {
    try {
        console.log(req.body);
        const { supplierName, purchaseId, orderItems, discount, discountAmt, totalAmt, netAmount } = req.body;

        const ordItem= orderItems.map((m)=>{
            return{
                itemId:m.id,
                orderQuantity:m.orderQty,
                discount:discount
            }
        })
        console.log(ordItem);
        
        const newPurchase = new purchase({
            supplierName,
            purchaseId,
            orderItems:ordItem,
            discount,
            discountAmt,
            totalAmt,
            netAmount,
        });

        const savedPurchase = await newPurchase.save();
        res.status(201).json({
            message: 'Purchase order created successfully!',
            purchase: savedPurchase,
        });
    } catch (error) {
        console.error('Error creating purchase order:', error);
        res.status(500).json({
            message: 'Failed to create purchase order',
            error: error.message,
        });
    }
};


const getallpurchase = async (req, res) => {
    try {
        const purchaseOrders = await purchase.aggregate([
            {
                $unwind: '$orderItems' 
            },
            {
                $lookup: {
                    from: 'items', 
                    localField: 'orderItems.itemId', 
                    foreignField: '_id', 
                    as: 'itemDetails' 
                }
            },
            {
                $unwind: '$itemDetails' 
            },
            {
                $group: {
                    _id: '$_id', 
                    supplierName: { $first: '$supplierName' },
                    purchaseId: { $first: '$purchaseId' },
                    orderItems: { $push: { 
                        itemId: '$itemDetails._id',
                        itemName: '$itemDetails.itemName',
                        orderQuantity: '$orderItems.orderQuantity',
                        discount: '$orderItems.discount',
                        unitPrice: '$itemDetails.unitPrice',
                        totalPrice: { $multiply: ['$orderItems.orderQuantity', '$itemDetails.unitPrice'] } 
                    }},
                    discount: { $first: '$discount' },
                    discountAmt: { $first: '$discountAmt' },
                    totalAmt: { $first: '$totalAmt' },
                    netAmount: { $first: '$netAmount' }
                }
            }
        ]);

        return res.status(200).json({ data: purchaseOrders });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server Error', error: err.message });
    }
};


module.exports = {
    createPurchase,
    getallpurchase
};
