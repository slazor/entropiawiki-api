const { GraphQLString } = require('graphql');
const MaturityResponse = require('._types/maturity');

const mob = {
  type: MaturityResponse,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolve: (context, args) => {
    console.log("Maturity args", args);
    return {id: "123456789", name: "Young"};
  }
};

module.exports = mob;