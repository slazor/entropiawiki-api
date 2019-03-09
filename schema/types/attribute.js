const { GraphQLObjectType, GraphQLString } = require('graphql');

const AttributeResponse = new GraphQLObjectType({
  name: "Attribute",
  description: "An Attribute",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Attribute ID",
      resolve: attribute => attribute.id
    },
    name: {
      type: GraphQLString,
      description: "Attribute name",
      resolve: attribute => attribute.name
    }
  })
});

module.exports = AttributeResponse;