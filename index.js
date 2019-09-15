require('module-alias/register');

const restify = require('restify');
const graphqlHTTP = require('express-graphql');
const schema = require('_schema');

const app = restify.createServer();

app.post('/graphql', graphqlHTTP({
  schema: schema,
  formatError: (err) => {
    const originalError = err.originalError;
    return {
      message: err.message,
      code: (originalError) ? originalError.code : null,
      locations: err.locations,
      path: err.path
    };
  },
  graphiql: false
}));

app.get('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000);
