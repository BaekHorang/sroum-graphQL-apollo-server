const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
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
    type Location {
        id: ID!
        name: String
        regionId: ID
        addr: String
        desc: String
    }
    type Spot {
        id: ID!
        name: String
        regionId: ID
        title: String
        subtitle: String
        baseLocation: Location
    }
    type Route {
        id: ID!
        name: String
        regionId: ID
        length: Int
    }
    type Trip {
        id: ID!
        name: String
        regionId: ID
        theme: String
    }
    type Region {
        id: ID!
        name: String
        constituentSpots: [Spot]
    }
`

// constituentTrips: [Trip]
// constituentRoutes: [Route]
// constituentLocations: [Location]

const resolvers = {
    Query: {
        locations: () => database.locations,
        spots: () => database.spots,
        spot: (parent, args, context, info) => database.spots.filter(
            (spot) => {
                return spot.id === args.id
            }
        )[0],
        routes: () => database.routes,
        trips: () => database.trips,
        // regions: () => database.regions
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
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`[index.js] Server ready at ${url}`)
})