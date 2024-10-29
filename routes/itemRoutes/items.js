
const express = require('express');
const router = express.Router();
const itemController = require('../../controllers/items/items');
const upload = require('../../utils/itemcreationmulter')

/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :rout item creation
*/
router.post('/createItem', upload.array('itemImages'),itemController.createItem)
router.get('/totalcount', itemController.getitems); 


// router.post('/', itemController.createSupplier); 
// router.get('/totalcount', itemController.getSuppliersCount); 
// router.get('/getsuppliers', itemController.getSuppliers); 

// router.get('/:id', supplierController.getSupplierById); 

// Additional routes for updating and deleting suppliers can go here

module.exports = router;




















