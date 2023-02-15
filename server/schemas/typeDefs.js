const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    income: Int
    expenses: [Expense]!
    savings: [Savings]!
}


type Expense {
    _id: ID!
    name: String!
    amount: Int!
    # date: String!
}

type Savings {
    _id: ID!
    name: String!
    amount: Int!
    # date: String!
}



type Auth {
    token: ID!
    user: User
}

type Query {
    getUser(email: String!): User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!, income: Int): Auth
    login(email: String!, password: String!): Auth

    setIncome(amount: Int!): User
    addExpense(name: String!, amount: Float!): User
    addSavings(name: String!, amount: Float! ): User
    removeExpense(expenseId: ID!): User
    removeSavings(savingsId: ID!): User

}

`;

module.exports = typeDefs;
