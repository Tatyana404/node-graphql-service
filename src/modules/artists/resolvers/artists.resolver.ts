import { Artist } from './../../../types/artist'

export const Resolvers = {
  Query: {
    artists: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => await dataSources.artistsApi.getArtists(),
    artist: async (
      _: undefined,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => await dataSources.artistsApi.getArtist(id)
  },
  Artist: {
    id: (parent: Artist) => parent._id,
    bands: (parent: Artist) => parent.bandsIds,
    instruments: (parent: Artist) => parent.instruments.join()
  }
}
