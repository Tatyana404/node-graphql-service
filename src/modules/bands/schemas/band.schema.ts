import { gql } from 'apollo-server'

export const Schema = gql`
  type Member {
    id: ID!
    artist: String
    instrument: String
    years: [String]
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type BandsData {
    items: [Band]
    limit: Int
    offset: Int
    total: Int
  }

  type Query {
    bands: BandsData
    band(id: ID!): Band
  }
`
