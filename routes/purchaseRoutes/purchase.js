
const express = require('express');
const router = express.Router();
const purchaseController = require('../../controllers/purchase/purchase');


/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :rout calling purchase
 */

router.post('/savepurcase', purchaseController.createPurchase); 
router.get('/allpurchaseorder', purchaseController.getallpurchase); 


module.exports = router;
