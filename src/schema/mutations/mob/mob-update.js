const { GraphQLString, GraphQLNonNull } = require('graphql');
const { Mob } = require('_config/db-models');
const MobResponse = require('_types/mob');

const MobUpdate = {
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

module.exports = MobUpdate;
