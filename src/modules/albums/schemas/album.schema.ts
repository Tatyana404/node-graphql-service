import { gql } from "apollo-server";

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

  type Query {
    albums: AlbumsData
    album(id: ID!): Album
  }
`;
