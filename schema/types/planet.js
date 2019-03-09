const { GraphQLObjectType, GraphQLString } = require('graphql');

const PlanetResponse = new GraphQLObjectType({
  name: "Planet",
  description: "A planet",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Planet ID",
      resolve: planet => planet.id
    },
    name: {
      type: GraphQLString,
      description: "Planet name",
      resolve: planet => planet.name
    }
  })
});

module.exports = PlanetResponse;