
const express = require('express');
const router = express.Router();
const itemController = require('../../controllers/items/items');
const upload = require('../../utils/itemcreationmulter')

/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :rout item 
*/
router.post('/createItem', upload.array('itemImages'),itemController.createItem)
router.get('/totalcount', itemController.getitems); 
router.get('/getAllItems', itemController.getAllItems); 


module.exports = router;




















