const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const { Mob } = require('../../../db-models');
const MobResponse = require('../../types/mob');

const mobMaturityAttributeAdd = {
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

module.exports = mobMaturityAttributeAdd;
