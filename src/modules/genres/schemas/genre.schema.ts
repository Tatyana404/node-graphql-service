import { gql } from 'apollo-server'

export const Schema = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type GenresData {
    items: [Genre]
    limit: Int
    offset: Int
    total: Int
  }

  type GenresRemove {
    acknowledged: String
    deletedCount: Int
  }

  type Query {
    genres(limit: Int, offset: Int): GenresData
    genre(id: ID!): Genre
  }

  type Mutation {
    createGenre(name: String!, description: String, country: String, year: Int): Genre
    updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(id: ID!): GenresRemove
  }
`
