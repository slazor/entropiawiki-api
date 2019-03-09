const { database } = require('../config.js');
const models = require('../db-models');

database.sync({ force: true });