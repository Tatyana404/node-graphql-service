import { Track } from './../../../types/track'

export const Resolvers = {
  Query: {
    tracks: async (_: undefined, { limit, offset }: { limit: number; offset: number }, { dataSources }: { dataSources: any }) => await dataSources.tracksApi.getTracks(limit, offset),
    track: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.tracksApi.getTrack(id)
  },

  Mutation: {
    createTrack: async (_: undefined, { title, albumId, artistsIds, bandsIds, duration, released, genresIds }: { title: string, albumId: string, artistsIds: string[], bandsIds: string[], duration: number, released: number, genresIds: string[] }, { dataSources }: { dataSources: any }) => await dataSources.tracksApi.createTrack(title, albumId, artistsIds, bandsIds, duration, released, genresIds),
    updateTrack: async (_: undefined, { id, title, albumId, artistsIds, bandsIds, duration, released, genresIds }: { id: string, title: string, albumId: string, artistsIds: string[], bandsIds: string[], duration: number, released: number, genresIds: string[] }, { dataSources }: { dataSources: any }) => await dataSources.tracksApi.updateTrack(id, title, albumId, artistsIds, bandsIds, duration, released, genresIds),
    deleteTrack: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.tracksApi.deleteTrack(id)
  },

  Track: {
    id: (parent: Track) => parent._id,
    album: async ({ albumId }: { albumId: string }, __: Record<string, never>, { dataSources }: { dataSources: any }) => await dataSources.albumsApi.getAlbum(albumId),
    artists: async (parent: Track, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.artistsIds.map((id: string) => dataSources.artistsApi.getArtist(id))),
    bands: async (parent: Track, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.bandsIds.map((id: string) => dataSources.bandsApi.getBand(id))),
    genres: async (parent: Track, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.genresIds.map((id: string) => dataSources.genresApi.getGenre(id)))
  }
}
