const sequelize = require("../db/db.js");
const users = require("../models/users.js");
const products = require("../models/products.js");
const professionals = require("../models/professionals.js");

const userbuyingproduct = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const user = await users.findByPk(userId);
    const product = await products.findByPk(productId);
    // const professional_owner = await

    await user.addProducts(product);

    res.send("relation made successfully");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = userbuyingproduct;
