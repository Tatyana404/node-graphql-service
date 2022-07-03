import { Album } from '../../../types/album'

export const Resolvers = {
  Query: {
    albums: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => await dataSources.albumsApi.getAlbums(),
    album: async (
      _: undefined,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => await dataSources.albumsApi.getAlbum(id)
  },
  Album: {
    id: (parent: Album) => parent._id,
    artists: (parent: Album) => parent.artistsIds,
    bands: (parent: Album) => parent.bandsIds,
    tracks: (parent: Album) => parent.trackIds,
    genres: (parent: Album) => parent.genresIds
  }
}
