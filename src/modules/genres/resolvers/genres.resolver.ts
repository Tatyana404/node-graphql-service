import { Genre } from './../../../types/genre'

export const Resolvers = {
  Query: {
    genres: async (_: undefined, { limit, offset }: { limit: number; offset: number }, { dataSources }: { dataSources: any }) => await dataSources.genresApi.getGenres(limit, offset),
    genre: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.genresApi.getGenre(id)
  },

  Mutation: {
    createGenre: async (_: undefined, { name, description, country, year }: { name: string, description: string, country: string, year: number }, { dataSources }: { dataSources: any }) => await dataSources.genresApi.createGenre(name, description, country, year),
    updateGenre: async (_: undefined, { id, name, description, country, year }: { id: string, name: string, description: string, country: string, year: number }, { dataSources }: { dataSources: any }) => await dataSources.genresApi.updateGenre(id, name, description, country, year),
    deleteGenre: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.genresApi.deleteGenre(id)
  },
  
  Genre: {
    id: (parent: Genre) => parent._id
  }
}
