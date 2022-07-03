import { gql } from 'apollo-server'

export const Schema = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type Jwt {
    jwt: String!
  }

  type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): Jwt
  }
`
