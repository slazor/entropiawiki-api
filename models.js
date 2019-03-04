const { Sequelize } = require('sequelize');
const uuid = require('uuid/v4');
const { database } = require('./config');

const Mob = database.define('mob', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: uuid()
  },
  name: Sequelize.STRING
});

module.exports = {
  Mob
};
