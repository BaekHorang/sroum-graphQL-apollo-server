const { gql } = require('apollo-server')

const typeDefs = gql`
    type Mutation {
        deleteSpot(id: String): Spot
        insertSpot(
            id: ID!
            name: String
            regionId: ID
            title: String
            subtitle: String
            baseLocationId: ID
        ): Spot
    }
`

module.exports = typeDefs