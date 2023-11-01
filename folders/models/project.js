const { model, datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class project extends model {}

project.init(
  {
    id: {
      type: datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: datatypes.TEXT,
    },
    date_created: {
      type: datatypes.DATE,
      allowNull: false,
      defaultValue: datatypes.NOW,
    },
    user_id: {
      type: datatypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = project;