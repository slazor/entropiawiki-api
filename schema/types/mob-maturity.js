const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const MobMaturityAttribute = require('./mob-maturity-attribute');

const MobMaturityResponse = new GraphQLObjectType({
  name: "MobMaturity",
  description: "A Mob Maturity",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Mob Maturity ID",
      resolve: mobMaturity => mobMaturity.id
    },
    name: {
      type: GraphQLString,
      description: "Mob Maturity name",
      resolve: mobMaturity => mobMaturity.name
    },
    hp: {
      type: GraphQLString,
      description: "Mob Maturity hp",
      resolve: mobMaturity => mobMaturity.hp
    },
    attributes: {
      type: GraphQLList(MobMaturityAttribute),
      description: "Mob Maturity attributes",
      resolve: mobMaturity => mobMaturity.attributes || []
    }
  })
});

module.exports = MobMaturityResponse;