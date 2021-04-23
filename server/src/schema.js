const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        user: String!
    } 
`;

module.exports = typeDefs;