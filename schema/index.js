const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const mobResolver = require("./resolvers/mob");
const planetResolver = require("./resolvers/planet");

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    mob: mobResolver,
    planet: planetResolver,
  }
});

// Define schema
const schema = new GraphQLSchema({
  query: query
});

module.exports = schema;