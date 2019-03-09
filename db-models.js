const { Sequelize } = require('sequelize');
const { database } = require('./config');

const Planet = database.define('planet', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});

const Attribute = database.define('attribute', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});

const DamageType = database.define('damage_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});

const Maturity = database.define('maturity', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});

const MobType = database.define('mob_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});

const Mob = database.define('mob', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});



// Relations
const MobMaturityAttribute = database.define('mob_maturity_attribute', {
  value: Sequelize.FLOAT
}, {
  timestamps: false
});

const MobMaturity = database.define('mob_maturity', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
},{
  timestamps: false
});






Maturity.belongsToMany(Mob, {through: 'mob_maturity'});
Mob.belongsToMany(Maturity, {through: 'mob_maturity'});
Mob.belongsTo(MobType);
//MobMaturity.belongsToMany(Attribute, {through: 'mob_maturity_attribute'})
Attribute.belongsToMany(MobMaturity, {through: 'mob_maturity_attribute'})




module.exports = {
  Planet,
  Attribute,
  Maturity,
  DamageType,
  Mob,
  MobType,
  MobMaturity,
  MobMaturityAttribute
};
