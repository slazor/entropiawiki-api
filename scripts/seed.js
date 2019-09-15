const { database } = require('../config/config');
const models = require('../config/db-models');

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
      name: "Stamina",
      description: "Stamina is a basic attribute available to all Avatars. It influences almost every action where bodily hardiness, constitution, and physical toughness are involved."
    }))
    .then(() => models.Attribute.create({
      name: "Strength",
      description: "Strength is a basic attribute available to all Avatars. It influences almost every action where raw muscle power, lifting capacity, and brute force are involved."
    }))
    .then(() => models.Attribute.create({
      name: "Psyche",
      description: "Psyche is a basic attribute available to all Avatars. It influences almost every action dealing with willpower, mental strength, and mindforce."
    }))
    .then(() => models.Attribute.create({
      name: "Intelligence",
      description: "Intelligence is a basic attribute available to all Avatars. It influences almost every action where the mind, memory or reasoning are involved."
    }))
    .then(() => models.Attribute.create({
      name: "Agility",
      description: "Agility is a basic attribute available to all avatars. It influences almost every action where coordination, finesse and grace are involved."
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
    }))

    // Movement Types
    .then(() => models.MovementType.create({
      name: "Running"
    }))
    .then(() => models.MovementType.create({
      name: "Flying"
    }));


  const movementType = await models.MovementType.findOne({
    where: {
      name: "Running"
    }
  }).then(result => result.toJSON());


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
    description: "The real name of this massive carnivore is Atroxenosaur. It has a short and stocky appearance due to its dumpy tail. The Atrox may look slow and clumsy but it's a formidable predator with four characteristic arms to grab on to its prey.",
    mobTypeId: mobType1.id,
    movementTypeId: movementType.id
  }).then(result => result.toJSON());

  await models.Mob.create({
    name: "Feffoid",
    description: "This is a mega-mutant of the humanoid mutant subspecies called Feffoids.",
    mobTypeId: mobType2.id,
    movementTypeId: movementType.id
  }).then(result => result.toJSON());

  await models.Mob.create({
    name: "Kerberos",
    description: "The Kerberos is a peculiar species, as it mimics the appearance of the far more dangerous creature, the Osseocollum, to scare and confuse predators into believing it is more dangerous than it really is. This is uncommon, but not unheard of in evolution and is called Batesian mimicry by biologists. It is an adaptation for survival evolved many times over on Earth, but never in creatures as big as Kerberos and Osseocollum. For this reason, Kerberos is a unique creature",
    mobTypeId: mobType1.id,
    movementTypeId: movementType.id
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



  const damageType1 = await models.DamageType.findOne({
    where: {
      name: "Cut"
    } 
  }).then(result => result.toJSON());

  const damageType2 = await models.DamageType.findOne({
    where: {
      name: "Stab"
    } 
  }).then(result => result.toJSON());

  const damageType3 = await models.DamageType.findOne({
    where: {
      name: "Impact"
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
  ]);


  const mobMaturityDamageTypes = await models.MobMaturityDamageType.bulkCreate([
    {
      value: 33.3,
      mobMaturityId: mobMaturity1.id,
      damageTypeId: damageType1.id,
    },
    {
      value: 33.3,
      mobMaturityId: mobMaturity1.id,
      damageTypeId: damageType2.id,
    },
    {
      value: 33.3,
      mobMaturityId: mobMaturity1.id,
      damageTypeId: damageType3.id,
    },
    {
      value: 33.3,
      mobMaturityId: mobMaturity2.id,
      damageTypeId: damageType1.id,
    },
    {
      value: 33.3,
      mobMaturityId: mobMaturity2.id,
      damageTypeId: damageType2.id,
    },
    {
      value: 33.3,
      mobMaturityId: mobMaturity2.id,
      damageTypeId: damageType3.id,
    },
  ]);

}

init();