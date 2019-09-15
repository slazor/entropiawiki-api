const { GraphQLString, GraphQLNonNull, GraphQLInputObjectType } = require('graphql');

const MobInput = new GraphQLInputObjectType({
  name: 'MobInput', 
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    movementType: { type: GraphQLString },
  }
 });

module.exports = MobInput;