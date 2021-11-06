<<<<<<< HEAD:models/Animals.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animals extends Model {}


Animals.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_species: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    when_fertile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   average_number_of_offspring: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gestation_period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    length_of_time_before_offspring_can_be_sold: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    habitat_requirements: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food_requirements: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stimulation_requirements: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adult_age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adult_weight_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additional_comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'animals',
  }
);

module.exports = Animals;
=======
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Livestock extends Model {}


Livestock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    livestock_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'livestock',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'livestock',
  }
);

module.exports = Livestock;
>>>>>>> main:models/Livestock.js
