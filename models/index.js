// import all models
const User = require('./User');
const Garden = require('./Garden');
const Plant = require('./Plant');
const Post = require("./Post");
const Comment = require("./Comment");

// create associations
// One to many relationship
User.hasMany(Post, {
    foreignKey: "user_id"
});

// One to one relationship
Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

Garden.hasMany(Plant, {
  foreignKey: 'garden_id'
});

Plant.belongsTo(Garden,{
  foreignKey: 'garden_id'
})

// we don't have to specify comment as a through table
// we don't need to access Post through Comment
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "SET NULL"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
});

module.exports = { User, Post, Comment, Garden,Plant };
