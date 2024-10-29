
const express = require('express');
const router = express.Router();
const supplierController = require('../../controllers/supplier/supplier');


/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :rout calling
 */

router.post('/', supplierController.createSupplier); 
router.get('/totalcount', supplierController.getSuppliersCount); 
router.get('/getsuppliers', supplierController.getSuppliers); 

// router.get('/:id', supplierController.getSupplierById); 

// Additional routes for updating and deleting suppliers can go here

module.exports = router;
