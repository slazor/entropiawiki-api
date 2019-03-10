const { GraphQLString, GraphQLObject, GraphQLNonNull } = require('graphql');
const { Mob } = require('../../../db-models');
const MobMaturityResponse = require('../../types/mob-maturity');

const mobMaturityAdd = {
  type: MobMaturityResponse,
  args: {
    mobId: { type: new GraphQLNonNull(GraphQLString) },
    maturityId: { type: new GraphQLNonNull(GraphQLString) },
    data: { type: new GraphQLNonNull(GraphQLObject) }
  },
  resolve: async (context, args) => {
    console.log("Added mob-maturity", args);

    // Create MobMaturity with data
    // Add attributes
    
    // Return MobMaturityResponse
    return mob;
  }
};

module.exports = mobMaturityAdd;
