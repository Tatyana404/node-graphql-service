import { Favourite } from '../../../types/favourite'

export const Resolvers = {
  Query: {
    favourites: async (_: undefined, __: Record<string, never>, { dataSources }: { dataSources: any }) => await dataSources.favouritesApi.getFavourites()
  },

  Mutation: {
    addBandToFavourites: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.favouritesApi.addBandToFavourites(id),
    addGenreToFavourites: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.favouritesApi.addGenreToFavourites(id),
    addArtistToFavourites: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.favouritesApi.addArtistToFavourites(id),
    addTrackToFavourites: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.favouritesApi.addTrackToFavourites(id)
  },

  Favourites: {
    id: (parent: Favourite) => parent._id,
    bands: async (parent: Favourite, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.bandsIds.map((id: string) => dataSources.bandsApi.getBand(id))),
    genres: async (parent: Favourite, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.genresIds.map((id: string) => dataSources.genresApi.getGenre(id))),
    artists: async (parent: Favourite, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.artistsIds.map((id: string) => dataSources.artistsApi.getArtist(id))),
    tracks: async (parent: Favourite, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.tracksIds.map((id: string) => dataSources.tracksApi.getTrack(id)))
  }
}
