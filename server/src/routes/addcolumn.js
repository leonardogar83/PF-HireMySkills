const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const queryInterface = sequelize.getQueryInterface();

const addcolumn = async (req, res) => {
  await queryInterface.addColumn("users", "role", {
    type: DataTypes.ENUM("admin", "user", "professional"),
  });
  res.send("created");
};

module.exports = addcolumn;
