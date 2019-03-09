const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const MobMaturity = require('./mob-maturity');

const MobResponse = new GraphQLObjectType({
  name: "Mob",
  description: "A mob",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Mob ID",
      resolve: mob => mob.id
    },
    name: {
      type: GraphQLString,
      description: "Mob name",
      resolve: mob => mob.name
    },
    type: {
      type: GraphQLString,
      description: "Mob type",
      resolve: mob => mob.type
    },
    maturities: {
      type: GraphQLList(MobMaturity),
      description: "Mob maturities",
      resolve: mob => mob.maturities || []
    }
  })
});

module.exports = MobResponse;