const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')

const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')

const locations = require('./typedefs-resolvers/locations')
const spots = require('./typedefs-resolvers/spots')
const routes = require('./typedefs-resolvers/routes')
const trips = require('./typedefs-resolvers/trips')
const regions = require('./typedefs-resolvers/regions')

//modularized: 2022-09-23

const typeDefs = [
    queries,
    mutations,
    locations.typeDefs,
    spots.typeDefs,
    routes.typeDefs,
    trips.typeDefs,
    regions.typeDefs
]

const resolvers = [
    locations.resolvers,
    regions.resolvers,
    routes.resolvers,
    spots.resolvers,
    trips.resolvers
]

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`[index.js] Server ready at ${url}`)
})