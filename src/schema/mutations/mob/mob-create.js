const { GraphQLNonNull } = require('graphql');
const APIError = require('_util/error');
const { Mob } = require('_config/db-models');
const MobResponse = require('_types/mob');
const MobInput = require('_inputTypes/mob');

const errors = {
  exists: 'A mob with this name already exists'
};

const MobCreate = {
  type: MobResponse,
  args: {
    input: { type: new GraphQLNonNull(MobInput) },
  },
  resolve: async (context, args) => {
    console.log("CREATE MOB - ARGS", args);

    const mobExist = await Mob.count({ where: { name: args.input.name } })
      .then(count => count > 0);

    if (mobExist) throw new APIError({ message: errors.exists, code: "exists" });

    const mob = await Mob.create(args.input)
      .then(result => result.toJSON());

    return mob;
  }
};

module.exports = MobCreate;
