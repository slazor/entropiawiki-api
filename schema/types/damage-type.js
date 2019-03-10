const { GraphQLObjectType, GraphQLString } = require('graphql');

const DamageTypeResponse = new GraphQLObjectType({
  name: "DamageType",
  description: "A Damage Type",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Damage Type ID",
      resolve: damageType => damageType.id
    },
    name: {
      type: GraphQLString,
      description: "Damage Type name",
      resolve: damageType => damageType.name
    }
  })
});

module.exports = DamageType;