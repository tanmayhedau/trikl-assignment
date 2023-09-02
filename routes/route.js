const express = require('express');
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();


// create item
router.post('/items', createItem);

// get items
router.get('/items', getItems);

//update items
router.put('/items/:id', updateItem);

//delete items
router.delete('/items/:id', deleteItem);


module.exports = router;