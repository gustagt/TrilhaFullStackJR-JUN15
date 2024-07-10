const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/config/config");

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Project",
  }
);

(async () => {
    await sequelize.sync();
})()

module.exports = Project