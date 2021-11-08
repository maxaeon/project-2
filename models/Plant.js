const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model { }

Plant.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        plant: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        annual: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        perennial: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        sewnDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        plantCondtions: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        sun: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        shade: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        depth: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        groups: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        rows: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        single: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        individual_seed_sprout_spacing: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        spacing_between_rows_groups: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        days_to_maturation_min: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        days_to_germination_max: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        days_to_maturity_min: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },


        days_to_maturity_max: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        garden_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'garden',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant',
    }
);

module.exports = Plant;
