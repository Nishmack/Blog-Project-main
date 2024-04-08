const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "nishma@99", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
