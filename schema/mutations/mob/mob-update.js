const { GraphQLString, GraphQLNonNull } = require('graphql');
const { Mob } = require('../../../db-models');
const MobResponse = require('../../types/mob');

const mobUpdate = {
  type: MobResponse,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
  },
  resolve: async (context, args) => {
    console.log(args);
    const mob = await Mob.findOne({
      where: { id: args.id },
    });

    await mob.update({
      name: args.name
    });
    
    return mob;
  }
};

module.exports = mobUpdate;
