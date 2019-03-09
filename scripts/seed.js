const { database } = require('../config.js');
const models = require('../db-models');

async function init() {
  await database.sync({ force: true })

    // Planets
    .then(() => models.Planet.create({
      name: "Calypso"
    }))
    .then(() => models.Planet.create({
      name: "Arkadia"
    }))

    // Attributes
    .then(() => models.Attribute.create({
      name: "Stamina"
    }))
    .then(() => models.Attribute.create({
      name: "Strength"
    }))
    .then(() => models.Attribute.create({
      name: "Psyche"
    }))
    .then(() => models.Attribute.create({
      name: "Intelligence"
    }))
    .then(() => models.Attribute.create({
      name: "Agility"
    }))

    // Maturities
    .then(() => models.Maturity.create({
      name: "Young"
    }))
    .then(() => models.Maturity.create({
      name: "Mature"
    }))
    .then(() => models.Maturity.create({
      name: "Old"
    }))

    // Damage types
    .then(() => models.DamageType.create({
      name: "Cut"
    }))
    .then(() => models.DamageType.create({
      name: "Stab"
    }))
    .then(() => models.DamageType.create({
      name: "Impact"
    }))

    // Mob Types
    .then(() => models.MobType.create({
      name: "Animal"
    }))
    .then(() => models.MobType.create({
      name: "Mutant"
    }))
    .then(() => models.MobType.create({
      name: "Robot"
    }));



  const mobType1 = await models.MobType.findOne({
    where: {
      name: "Animal"
    }
  }).then(result => result.toJSON());

  const mobType2 = await models.MobType.findOne({
    where: {
      name: "Mutant"
    }
  }).then(result => result.toJSON());



  const mob = await models.Mob.create({
    name: "Atrox",
    mobTypeId: mobType1.id
  }).then(result => result.toJSON());

  await models.Mob.create({
    name: "Feffoid",
    mobTypeId: mobType2.id
  }).then(result => result.toJSON());

  await models.Mob.create({
    name: "Kerberos",
    mobTypeId: mobType1.id
  }).then(result => result.toJSON());



  const maturity1 = await models.Maturity.findOne({
    where: {
      name: "Young"
    } 
  }).then(result => result.toJSON());

  const maturity2 = await models.Maturity.findOne({
    where: {
      name: "Mature"
    } 
  }).then(result => result.toJSON());



  const attribute1 = await models.Attribute.findOne({
    where: {
      name: "Stamina"
    } 
  }).then(result => result.toJSON());

  const attribute2 = await models.Attribute.findOne({
    where: {
      name: "Agility"
    } 
  }).then(result => result.toJSON());



  const mobMaturity1 = await models.MobMaturity.create({
    mobId: mob.id,
    maturityId: maturity1.id,
  }).then(result => result.toJSON());

  const mobMaturity2 = await models.MobMaturity.create({
    mobId: mob.id,
    maturityId: maturity2.id,
  }).then(result => result.toJSON());



  const mobMaturityAttributes = await models.MobMaturityAttribute.bulkCreate([
    {
      value: 351,
      mobMaturityId: mobMaturity1.id,
      attributeId: attribute1.id,
    },
    {
      value: 290,
      mobMaturityId: mobMaturity1.id,
      attributeId: attribute2.id,
    },
    {
      value: 450,
      mobMaturityId: mobMaturity2.id,
      attributeId: attribute1.id,
    },
    {
      value: 360,
      mobMaturityId: mobMaturity2.id,
      attributeId: attribute2.id,
    }
  ])
  .then(() => models.MobMaturityAttribute.findAll())
  .then(result => result.map(row => row.toJSON()));

}

init();