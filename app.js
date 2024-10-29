
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const cors = require('cors')

const app = express();
const Port = process.env.PORT || 3000;
const DB_CONNECTION = process.env.DB_CONNECTION;


app.use(express.json());
app.use(cors())

// MongoDB connection
mongoose.connect(DB_CONNECTION)
.then(() => {
  console.log('Connected to MongoDB successfully');
  app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection failed:', err);
});


/**
 * Auther:sudais
 * data:28-10-2024
 * Hint :rout requiring
 */
const supplierRoutes = require('./routes/supplierRoutes/supplier')
const purchseRoutes = require('./routes/purchaseRoutes/purchase')
const itemRoutes = require('./routes/itemRoutes/items')


app.use('/supplier',supplierRoutes)
app.use('/items',itemRoutes)
app.use('/purchase',purchseRoutes)

