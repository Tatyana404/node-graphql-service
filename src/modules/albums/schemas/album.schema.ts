import { gql } from 'apollo-server'

export const Schema = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type AlbumsData {
    items: [Album]
    limit: Int
    offset: Int
    total: Int
  }

  type AlbumsRemove {
    acknowledged: String
    deletedCount: Int
  }

  type Query {
    albums(limit: Int, offset: Int): AlbumsData
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(name: String!, released: Int, artistsIds: [ID], bandsIds: [ID], trackIds: [ID], genresIds: [ID], image: String): Album
    updateAlbum(id: ID!, name: String, released: Int, artistsIds: [ID], bandsIds: [ID], trackIds: [ID], genresIds: [ID], image: String): Album
    deleteAlbum(id: ID!): AlbumsRemove
  }
`
