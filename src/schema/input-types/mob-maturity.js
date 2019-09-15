const { GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInputObjectType } = require('graphql');
const MobMaturityAttributeInput = require('_inputTypes/mob-maturity-attribute');

const MobMaturityInput = new GraphQLInputObjectType({
  name: 'MobMaturityInput', 
  fields: {
    maturity: { type: new GraphQLNonNull(GraphQLString) },
    attributes: { type: GraphQLList(MobMaturityAttributeInput) },
    damageTypes: { type: GraphQLString },
  }
 });

module.exports = MobMaturityInput;