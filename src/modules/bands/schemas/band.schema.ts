import { gql } from 'apollo-server'

export const Schema = gql`
  type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instruments: String
    years: [String]
  }

  input MemberInput {
    _id: ID!
    instruments: String
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

  type BandsRemove {
    acknowledged: String
    deletedCount: Int
  }

  type Query {
    bands(limit: Int, offset: Int): BandsData
    band(id: ID!): Band
  }

  type Mutation {
    createBand(name: String!, origin: String, members: [MemberInput], website: String, genresIds: [ID]): Band
    updateBand(id: ID!, name: String, origin: String, members: [MemberInput], website: String, genresIds: [ID]): Band
    deleteBand(id: ID!): BandsRemove
  }
`
