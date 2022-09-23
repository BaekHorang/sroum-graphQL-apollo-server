const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Route {
        id: ID!
        name: String
        regionId: ID
        length: Int
    }
`

const resolvers = {
    Query: {
        routes: () => database.routes,
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}