const { GraphQLObjectType, GraphQLString } = require('graphql');

const MobMaturityAttributeResponse = new GraphQLObjectType({
  name: "MobMaturityAttribute",
  description: "A Mob Maturity Attribute",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "Mob Maturity Attribute name",
      resolve: mobMaturityAttribute => mobMaturityAttribute.name
    },
    value: {
      type: GraphQLString,
      description: "Mob Maturity Attribute value",
      resolve: mobMaturityAttribute => mobMaturityAttribute.value
    }
  })
});

module.exports = MobMaturityAttributeResponse;