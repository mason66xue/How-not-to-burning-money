// Mutations

import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}

`;

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
        _id
        username
        email
        }
  }
}

`;

export const SET_INCOME = gql`
    mutation setIncome($amount: Int!) {
        setIncome(amount: $amount) {
            _id
            username
            income
        }
    }
`;


export const ADD_EXPENSE = gql`
    mutation addExpense($name: String!, $amount: Float!) {
        addExpense(name: $name, amount: $amount) {
            _id
            username
            income
            expenses {
                _id
                name
                amount
            }
        }
    }
`;


export const ADD_SAVINGS = gql`
    mutation addSavings($name: String!, $amount: Float!) {
        addSavings(name: $name, amount: $amount) {
            _id
            username
            income
            savings {
                _id
                name
                amount
                
                
            }
        }
    }           
`;


export const REMOVE_EXPENSE = gql`
    mutation removeExpense($expenseId: ID!) {
        removeExpense(expenseId: $expenseId) {
            _id
            username
            income
            expenses {
                _id
                name
                amount
            }
        }
    }
`;


export const REMOVE_SAVINGS = gql`
    mutation removeSavings($savingsId: ID!) {   
        removeSavings(savingsId: $savingsId) {
            _id
            username
            income
            savings {
                _id
                name
                amount
            }
        }
    }
`;