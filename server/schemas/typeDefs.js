cosnt {gql} = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    transactions: [Transaction]
}

type Transaction {
    _id: ID
    transactionText: String!
    transactionAmount: Int!
}

type Query {
    user: User
    transactions: [Transaction]
}

type Mutation {}