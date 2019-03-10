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
    });

    const maturities = await Promise.all(mob.maturities.map( async (maturity) => {

      const attributes = await maturity.mob_maturity.getAttributes().then(res => res.map(r => r.toJSON()));
      const stamina = attributes.find(attribute => attribute.name.toLowerCase() === "stamina");

      return {
        id: maturity.mob_maturity.id,
        name: maturity.name,
        hp: stamina.mob_maturity_attribute.value * 10,
        attributes: attributes
      };
    }));

    const data = mob.toJSON();
    
    data.maturities = maturities;
    data.type = data.mob_type.name;
    
    return data;
  }
};

module.exports = mob;
