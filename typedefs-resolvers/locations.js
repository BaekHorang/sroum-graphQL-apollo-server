const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Location {
        id: ID!
        name: String
        regionId: ID
        addr: String
        desc: String
    }
`

const resolvers = {
    Query: {
        locations: () => database.locations,
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}