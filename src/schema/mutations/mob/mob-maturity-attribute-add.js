const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const { Mob } = require('_config/db-models');
const MobResponse = require('_types/mob');

const MobMaturityAttributeAdd = {
  type: MobResponse,
  args: {
    mobId: { type: new GraphQLNonNull(GraphQLString) },
    maturityId: { type: new GraphQLNonNull(GraphQLString) },
    attributeId: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve: async (context, args) => {
    console.log("Added mob-maturity attribute", args);
    
    return mob;
  }
};

module.exports = MobMaturityAttributeAdd;
