const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
    type Query {
        spots: [Spot]
    }
    type Spot {
        col1: String
        col2: String
        col3: String
        col4: String
    }
`

//modification
const resolvers = {
    Query: {
        spots: () => database.spots
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`[index.js] Server ready at ${url}`)
})