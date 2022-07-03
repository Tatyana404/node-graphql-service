import { Genre } from './../../../types/genre'

export const Resolvers = {
  Query: {
    genres: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => await dataSources.genresApi.getGenres(),
    genre: async (
      _: undefined,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => await dataSources.genresApi.getGenre(id)
  },
  Genre: {
    id: (parent: Genre) => parent._id
  }
}
