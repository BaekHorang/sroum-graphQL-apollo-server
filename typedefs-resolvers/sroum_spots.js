const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type SROUM_Spot {

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

        },
        insertSpot: (parent, args, context, info) => {

        },
        editSpot: (parent, args, context, info) => {

        }
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}