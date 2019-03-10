const { Sequelize } = require('sequelize');
const { database } = require('./config');
const PaperTrail = require('sequelize-paper-trail').init(database, {
  UUID: true
});
PaperTrail.defineModels();

const Planet = database.define('planet', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});
Planet.hasPaperTrail();

const Attribute = database.define('attribute', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});
Attribute.hasPaperTrail();

const DamageType = database.define('damage_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});
DamageType.hasPaperTrail();


const Maturity = database.define('maturity', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});
Maturity.hasPaperTrail();

const MobType = database.define('mob_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});
MobType.hasPaperTrail();

const Mob = database.define('mob', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
});
Mob.hasPaperTrail();



// Relation tables
const MobMaturityAttribute = database.define('mob_maturity_attribute', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  value: Sequelize.FLOAT
}, {
  timestamps: false
});
MobMaturityAttribute.hasPaperTrail();

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
MobMaturity.hasPaperTrail();



// Mob has one type
Mob.belongsTo(MobType);
// Mob has many maturities
Mob.belongsToMany(Maturity, { through: 'mob_maturity' });

// MobMaturity has many attributes
MobMaturity.belongsToMany(Attribute, { as: 'Attributes', through: 'mob_maturity_attribute' })


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
