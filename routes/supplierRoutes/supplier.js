
const express = require('express');
const router = express.Router();
const supplierController = require('../../controllers/supplier/supplier');


/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :rout calling suppliyers
 */

router.post('/', supplierController.createSupplier); 
router.get('/totalcount', supplierController.getSuppliersCount); 
router.get('/getsuppliers', supplierController.getSuppliers); 


module.exports = router;
