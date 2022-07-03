import { gql } from 'apollo-server'

export const Schema = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: String
  }

  type ArtistsData {
    items: [Artist]
    limit: Int
    offset: Int
    total: Int
  }

  type Query {
    artists: ArtistsData
    artist(id: ID!): Artist
  }
`