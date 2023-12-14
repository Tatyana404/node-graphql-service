import { Album } from '../../../types/album'

export const Resolvers = {
  Query: {
    albums: async (_: undefined, { limit, offset }: { limit: number; offset: number }, { dataSources }: { dataSources: any }) => await dataSources.albumsApi.getAlbums(limit, offset),
    album: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.albumsApi.getAlbum(id)
  },

  Mutation: {
    createAlbum: async (_: undefined, { name, released, artistsIds, bandsIds, trackIds, genresIds, image }: { name: string, released: number, artistsIds: string[], bandsIds: string[], trackIds: string[], genresIds: string[], image: string }, { dataSources }: { dataSources: any }) => await dataSources.albumsApi.createAlbum(name, released, artistsIds, bandsIds, trackIds, genresIds, image),
    updateAlbum: async (_: undefined, { id, name, released, artistsIds, bandsIds, trackIds, genresIds, image }: { id: string, name: string, released: number, artistsIds: string[], bandsIds: string[], trackIds: string[], genresIds: string[], image: string }, { dataSources }: { dataSources: any }) => await dataSources.albumsApi.updateAlbum(id, name, released, artistsIds, bandsIds, trackIds, genresIds, image),
    deleteAlbum: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.albumsApi.deleteAlbum(id)
  },

  Album: {
    id: (parent: Album) => parent._id,
    artists: async (parent: Album, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.artistsIds.map((id: string) => dataSources.artistsApi.getArtist(id))),
    bands: async (parent: Album, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.bandsIds.map((id: string) => dataSources.bandsApi.getBand(id))),
    tracks: async (parent: Album, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.trackIds.map((id: string) => dataSources.tracksApi.getTrack(id))),
    genres: async (parent: Album, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.genresIds.map((id: string) => dataSources.genresApi.getGenre(id)))
  }
}
