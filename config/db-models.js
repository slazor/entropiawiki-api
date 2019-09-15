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
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});
Planet.hasPaperTrail();


const Attribute = database.define('attribute', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  }
});
Attribute.hasPaperTrail();


const DamageType = database.define('damage_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});
DamageType.hasPaperTrail();


const Maturity = database.define('maturity', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});
Maturity.hasPaperTrail();

const MovementType = database.define('movement_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});
MovementType.hasPaperTrail();

const MobType = database.define('mob_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});
MobType.hasPaperTrail();


const Mob = database.define('mob', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  tameable: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  sweatable: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});
Mob.hasPaperTrail();



// Relation tables

const MobMaturity = database.define('mob_maturity', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  maxDamage: {
    type: Sequelize.FLOAT,
    allowNull: true,
    defaultValue: null
  }
}, { timestamps: false }); 
MobMaturity.hasPaperTrail();


const MobMaturityAttribute = database.define('mob_maturity_attribute', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  value: {
    type: Sequelize.FLOAT,
    defaultValue: 0.0
  }
}, { timestamps: false });
MobMaturityAttribute.hasPaperTrail();


const MobMaturityDamageType = database.define('mob_maturity_damage_type', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  value: {
    type: Sequelize.FLOAT,
    defaultValue: 0.0
  }
}, { timestamps: false });
MobMaturityDamageType.hasPaperTrail();



// Mob has one type
Mob.belongsTo(MobType);
// Mob has one movement type
Mob.belongsTo(MovementType);
// Mob has many maturities
Mob.belongsToMany(Maturity, { through: 'mob_maturity' });

// MobMaturity has many attributes
MobMaturity.belongsToMany(Attribute, { as: 'Attributes', through: 'mob_maturity_attribute' });
// MobMaturity has many damage types
MobMaturity.belongsToMany(DamageType, { as: 'DamageTypes', through: 'mob_maturity_damage_type' });


module.exports = {
  Planet,
  Attribute,
  Maturity,
  DamageType,
  MovementType,
  Mob,
  MobType,
  MobMaturity,
  MobMaturityAttribute,
  MobMaturityDamageType
};
