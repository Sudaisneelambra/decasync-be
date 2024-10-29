
const Supplier = require('../../models/suppliers');

/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :craeting user
 */
const createSupplier = async (req, res) => {
  const { supplierName, address, taxNo, country, mobileNo, email,supplierNo } = req.body;

  console.log(req.body);
  

  try {

    const already = await Supplier.findOne({email})
    if(already){
            res.json({
                status:false,
                message:"Supplier already exist"
            })
    } else{
        const newSupplier = new Supplier({
            supplierNo,
            supplierName,
            address,
            taxNo,
            country,
            mobileNo,
            email,
            status:'Active',
          });
      
          await newSupplier.save();
          res.json({
            status:true,
            message:"Supplier saved succcesfully"
        })
    }
    
  } catch (error) {
    console.log(error);
    res.status(400).json({ 
        status:false,
        message:"failed saving supplyer",
        messageserver: error.message         
    });
  }
};


/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :get all count
 */

const getSuppliersCount = async (req, res) => {
    try {
      const count = await Supplier.countDocuments(); 
      res.json({ count }); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  /**
 * Auther:sudais
 * data:28-10-2024
 * Hint :get all suppliyers
 */

const getSuppliers = async (req, res) => {
    try {
      const suppliers = await Supplier.find(); 
      res.json({ 
        data:suppliers
       }); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
module.exports = {
    createSupplier,
    getSuppliersCount,
    getSuppliers
}
