const User = require('./user');
const Project = require('./project');

user.hasMany(project, {
  foreignKey: 'user_id',
  onDelete: ''
});

project.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, project };