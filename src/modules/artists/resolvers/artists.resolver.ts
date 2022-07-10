import { Artist } from './../../../types/artist'

export const Resolvers = {
  Query: {
    artists: async (_: undefined, { limit, offset }: { limit: number; offset: number }, { dataSources }: { dataSources: any }) => await dataSources.artistsApi.getArtists(limit, offset),
    artist: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.artistsApi.getArtist(id)
  },

  Mutation: {
    createArtist: async (_: undefined, { firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments }: { firstName: string, secondName: string, middleName: string, birthDate: string, birthPlace: string, country: string, bandsIds: string[], instruments: string[] }, { dataSources }: { dataSources: any }) => await dataSources.artistsApi.createArtist(firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments),
    updateArtist: async (_: undefined, { id, firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments }: { id: string, firstName: string, secondName: string, middleName: string, birthDate: string, birthPlace: string, country: string, bandsIds: string[], instruments: string[] }, { dataSources }: { dataSources: any }) => await dataSources.artistsApi.updateArtist(id, firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments),
    deleteArtist: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.artistsApi.deleteArtist(id)
  },

  Artist: {
    id: (parent: Artist) => parent._id,
    bands: async (parent: Artist, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.bandsIds.map((id: string) => dataSources.bandsApi.getBand(id)))
  }
}
