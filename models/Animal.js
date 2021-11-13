const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model { }


Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    animal_species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
    },
    when_fertile: {
      type: DataTypes.STRING,
    },
    offspring_number: {
      type: DataTypes.STRING,
    },
    gestation: {
      type: DataTypes.INTEGER,
    },
    when_to_sell_offspring: {
      type: DataTypes.STRING,
    },
    habitat: {
      type: DataTypes.STRING,
    },
    food: {
      type: DataTypes.STRING,
    },
    stimulation: {
      type: DataTypes.STRING,
    },
    adult_age: {
      type: DataTypes.STRING,
    },
    adult_weight_lbs: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.STRING,
    },
    livestock_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "livestock",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'animal',
  }
);

module.exports = Animal;
