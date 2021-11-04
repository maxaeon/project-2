const User = require('./User');
const Garden = require('./Garden');
const Plant = require('./Plant')

User.hasMany(Garden, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Garden.belongsTo(User, {
  foreignKey: 'user_id'
});

Garden.hasMany(Plant, {
  foreignKey: 'garden_id',
  onDelete: 'SET NULL'
});


Plant.belongsTo(Garden, {
  foreignKey: 'garden_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Garden, Plant };
