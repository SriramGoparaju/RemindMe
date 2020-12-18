// Dependency imports
const {ApolloServer, gql} = require('apollo-server');
const Mongoose = require('mongoose');

// local imports
const typeDefs = require('./Graphql/Schema/schema');
const resolvers = require('./Graphql/Resolvers/resolvers');

// Creating a new server and passing request through context
const server = new ApolloServer({
      typeDefs, 
      resolvers, 
      context: ({req}) => ({req})
    });

//Connecting to mongoose
Mongoose.connect("mongodb://127.0.0.1:27017/merng", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( () => {
  console.log('mongoDB connected');
  server.listen({port: 5000
  }) .then( res => {
     console.log(`Server running on ${res.url}`);
  });
})
