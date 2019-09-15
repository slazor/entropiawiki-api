const { GraphQLObjectType, GraphQLString } = require('graphql');

const MaturityResponse = new GraphQLObjectType({
  name: "Maturity",
  description: "A Maturity",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Maturity ID",
      resolve: maturity => maturity.id
    },
    name: {
      type: GraphQLString,
      description: "Maturity name",
      resolve: maturity => maturity.name
    }
  })
});

module.exports = MaturityResponse;