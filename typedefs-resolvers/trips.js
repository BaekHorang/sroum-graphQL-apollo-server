const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Trip {
        id: ID!
        name: String
        regionId: ID
        theme: String
    }
`

const resolvers = {
    Query: {
        trips: () => database.trips,
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}