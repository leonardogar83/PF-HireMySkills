const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const queryInterface = sequelize.getQueryInterface();

const addcolumn = async (req, res) => {
  try {
    await queryInterface.addColumn("users", "role", {
      type: DataTypes.ENUM("admin", "user", "professional"),
    });
    res.send("created");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = addcolumn;
