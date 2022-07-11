const { ApolloServer, graphql } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { users } = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query },
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';

    // try to retrieve a user with the token
    const user = getUser(token);

    // optionally block the user
    // we could also check user roles/permissions here
    if (!user) throw new AuthenticationError('you must be logged in');

    console.log(token);
    console.log(user);

    // add the user to the context
    return { user };
  },
});

server.listen().then(({ url }) => {
  console.log('Sever is ready at ' + url);
});

function getUser(token) {
  return users.find((user) => user.token === token);
}
