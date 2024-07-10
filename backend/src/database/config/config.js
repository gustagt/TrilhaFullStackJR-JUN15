const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/data/data.db",
  logging: console.log,
}); 

module.exports = sequelize;
