const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const queries = require("./queries");
const mutations = require("./mutations");

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getMob: queries.mob,
    getPlanet: queries.planet,
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createMob: mutations.mobCreate,
    updateMob: mutations.mobUpdate,
    updateMobMaturityAttribute: mutations.mobMaturityAttributeUpdate
  }
});

// Define schema
const schema = new GraphQLSchema({
  query,
  mutation
});

module.exports = schema;