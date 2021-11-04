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

User.hasMany(Plant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


Plant.belongsTo(User, {
  foreignKey: 'user_id',
  foreignKey: 'garden_id'
});

module.exports = { User, Garden ,Plant};
