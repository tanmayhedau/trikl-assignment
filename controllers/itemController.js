const itemModel = require("../models/itemModel");

module.exports.createItem = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category) {
      return res.status(401).json({
        success: false,
        message: "All fields are required"
      })
    }

    const itemData = new itemModel({
      name, description, price, category
    });

    await itemData.save();
    return res.status(201).json({
      success: true,
      message: 'item created successfully',
      itemData
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

module.exports.getItems = async (req, res) => {
  try {
    const items = await itemModel.find(req.query);
    return res.status(200).json({
      success: true, message: "fetched all items",
      numberOfItems: items.length,
      items
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

module.exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    const updatedItem = await itemModel.findByIdAndUpdate(
      id,
      { $set: { name, description, price, category } },
      { new: true });

    if (!updatedItem) {
      return res.status(404).json({ success: false, message: "Item does not exist, try another one." })
    }
    return res.status(200).json({
      success: true, message: "Item updated successfully", updatedItem
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}


module.exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await itemModel.findByIdAndDelete(id)
    if (!deletedItem) {
      return res.status(404).json({ success: false, message: "Item does not exist, try another one." })
    }
    return res.status(200).json({
      success: true, message: "Item deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}
