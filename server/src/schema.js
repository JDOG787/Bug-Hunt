const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        user: String!
        login(code: String!): String!
    } 
`;

module.exports = typeDefs;