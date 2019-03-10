const { GraphQLString, GraphQLNonNull } = require('graphql');
const { Mob } = require('../../../db-models');
const MobResponse = require('../../types/mob');

const mobCreate = {
  type: MobResponse,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
  },
  resolve: async (context, args) => {
    console.log(args);
    
    return mob;
  }
};

module.exports = mobCreate;
