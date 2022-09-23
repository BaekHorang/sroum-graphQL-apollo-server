const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        locations: [Location]
        spots: [Spot]
        spot(id: ID): Spot
        routes: [Route]
        trips: [Trip]
        regions: [Region]
        region(id: ID): Region
    }
`

module.exports = typeDefs