const { gql } = require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationlity!
        friends: [User]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!    
    }            

    enum Nationlity{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }

`;

module.exports = { typeDefs };