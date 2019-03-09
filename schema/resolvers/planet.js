const { GraphQLString } = require('graphql');
const PlanetResponse = require('../types/planet');

const planet = {
  type: PlanetResponse,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolve: (context, args) => {
    console.log("Planet args", args);
    return {id: "12345", name: "Calypso"};
  }
};

module.exports = planet;