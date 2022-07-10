import { gql } from 'apollo-server'

export const Schema = gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Query {
    favourites: Favourites
  }

  type Mutation {
    addBandToFavourites(id: ID!): Favourites
    addGenreToFavourites(id: ID!): Favourites
    addArtistToFavourites(id: ID!): Favourites
    addTrackToFavourites(id: ID!): Favourites
  }
`
