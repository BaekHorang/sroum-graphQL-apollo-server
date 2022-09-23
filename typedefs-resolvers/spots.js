const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Spot {
        id: ID!
        name: String
        regionId: ID
        title: String
        subtitle: String
        baseLocationId: ID
    }
`

const resolvers = {
    Query: {
        spots: () => database.spots,
        spot: (parent, args, context, info) => database.spots.filter(
            (spot) => {
                return spot.id === args.id
            }
        )[0],
    },
    Mutation: {
        deleteSpot: (parent, args, context, info) => {
            const deleted = database.spots
            .filter((spot) => {
                return spot.id === args.id
            })[0]

            database.spots = database.spots
            .filter((spot) => {
                return spot.id !== args.id
            })
            
            return deleted
        },
        insertSpot: (parent, args, context, info) => {
            database.spots.push(args)
            return args
        }
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}