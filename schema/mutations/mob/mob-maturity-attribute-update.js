const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const { MobMaturity, MobMaturityAttribute } = require('../../../db-models');
const MobResponse = require('../../types/mob');

const mobMaturityAttributeUpdate = {
  type: MobResponse,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve: async (context, args) => {
    console.log("Updated mob-maturity attribute", args);

    const mobMaturityAttribute = await MobMaturityAttribute.findByPk(args.id);

    await mobMaturityAttribute.update({
      value: parseFloat(args.value)
    });

    return mobMaturityAttribute.toJSON();
  }
};

module.exports = mobMaturityAttributeUpdate;
