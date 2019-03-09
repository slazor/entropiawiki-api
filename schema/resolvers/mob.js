const { GraphQLString } = require('graphql');
const MobResponse = require('../types/mob');

const { database } = require('../../config.js');
const { Planet, Attribute, Maturity, DamageType, Mob, MobType, MobMaturity, MobMaturityAttribute } = require('../../db-models');

const mob = {
  type: MobResponse,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolve: async (context, args) => {
    const mob = await Mob.findOne({
      where: args,
      include: [
        { model: Maturity },
        { model: MobType }
      ]
    }).then(result => result.toJSON());

    const maturities = await Promise.all(mob.maturities.map( async (maturity) => {

      const attributes = await Attribute.findAll({
        include: [{
          model: MobMaturity,
          where: {
            id: maturity.mob_maturity.id
          }
        }]
      }).then(result => result.map(attribute => {
        const attributesObject = attribute.toJSON();
        attributesObject.value = attributesObject.mob_maturities[0].mob_maturity_attribute.value;
        return attributesObject;
      }));

      const stamina = attributes.find(attribute => attribute.name.toLowerCase() === "stamina");

      return {
        id: maturity.id,
        name: maturity.name,
        hp: stamina.value * 10,
        attributes: attributes
      };
    }));
    
    mob.maturities = maturities;
    mob.type = mob.mob_type.name;
    
    return mob;
  }
};

module.exports = mob;
