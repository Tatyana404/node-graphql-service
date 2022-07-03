import { Track } from './../../../types/track'

export const Resolvers = {
  Query: {
    tracks: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => await dataSources.tracksApi.getTracks(),
    track: async (
      _: undefined,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => await dataSources.tracksApi.getTrack(id)
  },
  Track: {
    id: (parent: Track) => parent._id,
    // albums: (parent: Track) => parent.albumId,
    bands: (parent: Track) => parent.bandsIds,
    genres: (parent: Track) => parent.genresIds
  }
}
