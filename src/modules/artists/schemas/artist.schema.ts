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
    instruments: [String]
  }

  type ArtistsData {
    items: [Artist]
    limit: Int
    offset: Int
    total: Int
  }

  type ArtistsRemove {
    acknowledged: String
    deletedCount: Int
  }

  type Query {
    artists(limit: Int, offset: Int): ArtistsData
    artist(id: ID!): Artist
  }

  type Mutation {
    createArtist(firstName: String!, secondName: String!, middleName: String, birthDate: String, birthPlace: String, country: String, bandsIds: [ID], instruments: [String]): Artist
    updateArtist(id: ID!, firstName: String, secondName: String, middleName: String, birthDate: String, birthPlace: String, country: String, bandsIds: [ID], instruments: [String]): Artist
    deleteArtist(id: ID!): ArtistsRemove
  }

`
