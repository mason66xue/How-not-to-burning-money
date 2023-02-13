const {gql} = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    createAt: String
    transactions: [Transaction]!
}

type Transaction {
    _id: ID
    name: String!
    # amount: Int!
    date: String
    category: [Category]
}

type Category {
    _id: ID
    name: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username:String!): User
    transactions(username: String!): [Transaction]
}

type Mutation {

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # addTransaction(transactionText: String!, transactionAmount: Int!): Transaction
    # removeTransaction(transactionId: ID!): Transaction

   
}

`;

module.exports = typeDefs;