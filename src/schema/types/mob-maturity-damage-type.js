const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require('graphql');

const MobMaturityDamageTypeResponse = new GraphQLObjectType({
  name: "mobMaturityDamageType",
  description: "A Mob Maturity Damage Type",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Mob Maturity Attribute id",
      resolve: mobMaturityDamageType => mobMaturityDamageType.mob_maturity_damage_type.id
    },
    name: {
      type: GraphQLString,
      description: "Mob Maturity Attribute name",
      resolve: mobMaturityDamageType => mobMaturityDamageType.name
    },
    value: {
      type: GraphQLFloat,
      description: "Mob Maturity Attribute value",
      resolve: mobMaturityDamageType => mobMaturityDamageType.mob_maturity_damage_type.value
    }
  })
});

module.exports = MobMaturityDamageTypeResponse;