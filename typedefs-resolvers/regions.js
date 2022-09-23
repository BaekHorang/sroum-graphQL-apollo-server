const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Region {
        id: ID!
        name: String
        constituentSpots: [Spot]
    }
`

const resolvers = {
    Query: {
        regions: () => database.regions
        .map((region) => {
            region.constituentSpots = database.spots
            .filter((spot) => {
                return spot.regionId === region.id
            })
            return region
        }),
        region: (parent, args, context, info) => database.regions.filter(
            (region) => {
                return region.id === args.id
            }
        )[0]
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}