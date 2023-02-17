import { gql } from '@apollo/client';

export const  QUERY_USER = gql`
    query getUser($email: String!) {
        getUser(email: $email) {
            _id
            username
            email
            income
            expenses {
                _id
                name
                amount
            }
            savings {
                _id
                name
                amount
            }
        }
    }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
        username
        email
    }
  }
`;