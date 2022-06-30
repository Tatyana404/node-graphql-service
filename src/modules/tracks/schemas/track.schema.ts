import { gql } from "apollo-server";

export const Schema = gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
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

  type Query {
    tracks: TracksData
  }
`;
