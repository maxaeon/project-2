const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calendar extends Model { }


Calendar.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        events: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        garden_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'garden',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'calendar',
    }
)

// module.exports = Calendar;