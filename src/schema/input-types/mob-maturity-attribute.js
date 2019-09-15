const { GraphQLString, GraphQLFloat, GraphQLNonNull, GraphQLInputObjectType } = require('graphql');

const MobMaturityAttributeInput = new GraphQLInputObjectType({
  name: 'MobMaturityAttributeInput', 
  fields: {
    attribute: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLFloat) },
  }
 });

module.exports = MobMaturityAttributeInput;