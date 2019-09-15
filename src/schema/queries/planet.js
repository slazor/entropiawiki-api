const { GraphQLString } = require('graphql');
const { Planet } = require('_config/db-models');
const PlanetResponse = require('_types/planet');

const planet = {
  type: PlanetResponse,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolve: async (context, args) => {
    console.log("Planet args", args);
    
    const planet = await Planet.findOne({
      where: args
    }).then(result => result.toJSON());

    return planet;
  }
};

module.exports = planet;