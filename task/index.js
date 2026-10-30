import { ApolloServer } from "@apollo/server";
import {resolvers} from "./schema/resolver.js"
import { typeDefs } from "./schema/typeDefs.js";
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({typeDefs,resolvers})

const {url} = await startStandaloneServer(server, {
  listen: { port: 4000 },
 
});
 console.log(url)
