import { gql } from "apollo-server";

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

  type Query {
    genres: GenresData
  }
`;
