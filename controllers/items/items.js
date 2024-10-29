    
const items = require('../../models/items')
    
    
    /**
 * Auther:sudais
 * data:28-10-2024
 * Hint :creating item
 */

const createItem = async (req, res) => {
    const { itemName, inventoryLocation, brand, category, supplier, stockUnit, unitPrice, status ,itemNo} = req.body;
    const itemImages = req.files; 
    console.log(req.files);
    
    console.log(req.body);
    

    try {
        const imagesUrl = itemImages.map(file => file.location);
        console.log(imagesUrl);
        

        // Create and save the item in the database
        const newItem = new items({
            itemNo,
            itemName,
            inventoryLocation,
            brand,
            category,
            supplier,
            stockUnit,
            unitPrice,
            status,
            itemImages: imagesUrl,
        });

        const savedItem = await newItem.save();

        // Send a response
        res.status(201).json({
            succuss:true,
            message: 'Item created successfully!',
            item: savedItem,
        });
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    }


      /**
 * Auther:sudais
 * data:28-10-2024
 * Hint :get all items
 */

      
const getitems = async (req, res) => {
    try {
      const suppliers = await items.find(); 
      res.json({ 
        data:suppliers
       }); 
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error);
      
    }
  };
  

module.exports ={
    createItem,
    getitems
};
