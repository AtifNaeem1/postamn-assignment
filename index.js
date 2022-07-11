const { ApolloServer } = require('apollo-server');
const { coins } = require('./db');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query },
  context: {
    coins,
  },
});

server.listen().then(({ url }) => {
  console.log('Sever is ready at ' + url);
});
