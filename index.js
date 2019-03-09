const restify = require('restify');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = restify.createServer();

app.post('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: false
}));

app.get('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000);
