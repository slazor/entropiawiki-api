const { GraphQLString, GraphQLNonNull } = require('graphql');
const { Mob } = require('_config/db-models');
const MobMaturityResponse = require('_types/mob-maturity');
const MobMaturityInput = require('_inputTypes/mob-maturity');

const MobMaturityAdd = {
  type: MobMaturityResponse,
  args: {
    mobId: { type: new GraphQLNonNull(GraphQLString) },
    input: { type: new GraphQLNonNull(MobMaturityInput) }
  },
  resolve: async (context, args) => {
    console.log("Added mob-maturity", args);
    console.log(args.input.attributes);

    // Create MobMaturity with data
    // Add attributes
    
    // Return MobMaturityResponse
    return mob;
  }
};

module.exports = MobMaturityAdd;
