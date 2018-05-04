import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './src/models';


const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/schema')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './src/resolvers')))


const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync({force: true})
  .then(() => {
  app.listen(8081);
})