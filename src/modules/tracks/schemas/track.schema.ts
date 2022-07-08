import { gql } from 'apollo-server'

export const Schema = gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type TracksData {
    items: [Track]
    limit: Int
    offset: Int
    total: Int
  }

  type TracksRemove {
    acknowledged: String
    deletedCount: Int
  }

  type Query {
    tracks(limit: Int, offset: Int): TracksData
    track(id: ID!): Track
  }

  type Mutation {
    createTrack(title: String!, albumId: ID, artistsIds: [ID], bandsIds: [ID], duration: Int, released: Int, genresIds: [ID]): Track
    updateTrack(id: ID!, title: String, albumId: ID, artistsIds: [ID], bandsIds: [ID], duration: Int, released: Int, genresIds: [ID]): Track
    deleteTrack(id: ID!): TracksRemove
  }
`
