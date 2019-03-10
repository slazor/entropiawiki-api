const { GraphQLObjectType, GraphQLString } = require('graphql');

const MobMaturityAttributeResponse = new GraphQLObjectType({
  name: "MobMaturityAttribute",
  description: "A Mob Maturity Attribute",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Mob Maturity Attribute id",
      resolve: mobMaturityAttribute => mobMaturityAttribute.mob_maturity_attribute.id
    },
    name: {
      type: GraphQLString,
      description: "Mob Maturity Attribute name",
      resolve: mobMaturityAttribute => mobMaturityAttribute.name
    },
    value: {
      type: GraphQLString,
      description: "Mob Maturity Attribute value",
      resolve: mobMaturityAttribute => mobMaturityAttribute.mob_maturity_attribute.value
    }
  })
});

module.exports = MobMaturityAttributeResponse;