import { Member, Band, MemberForBand } from '../../../types/band'
import { Artist } from './../../../types/artist'

export const Resolvers = {
  Query: {
    bands: async (_: undefined, { limit, offset }: { limit: number; offset: number }, { dataSources }: { dataSources: any }) => await dataSources.bandsApi.getBands(limit, offset),
    band: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.bandsApi.getBand(id)
  },

  Mutation: {
    createBand: async (_: undefined, { name, origin, members, website, genresIds }: { name: string, origin: string, members: Member[], website: string, genresIds: string[] }, { dataSources }: { dataSources: any }) => await dataSources.bandsApi.createBand(name, origin, members, website, genresIds),
    updateBand: async (_: undefined, { id, name, origin, members, website, genresIds }: { id: string, name: string, origin: string, members: Member[], website: string, genresIds: string[] }, { dataSources }: { dataSources: any }) => await dataSources.bandsApi.updateBand(id, name, origin, members, website, genresIds),
    deleteBand: async (_: undefined, { id }: { id: string }, { dataSources }: { dataSources: any }) => await dataSources.bandsApi.deleteBand(id)
  },

  Member: {
    id: (parent: MemberForBand) => parent._id
  },

  Band: {
    id: (parent: Band) => parent._id,
    genres: async (parent: Band, __: Record<string, never>, { dataSources }: { dataSources: any }) => await Promise.all(parent.genresIds.map((id: string) => dataSources.genresApi.getGenre(id))),
    members: async (parent: Band, __: Record<string, never>, { dataSources }: { dataSources: any }) => (await Promise.all(parent.members.map(({ _id: id }: { _id: string }) => dataSources.artistsApi.getArtist(id)))).map((artist: Artist, index: number) => ({ ...artist, instruments: parent.members[index].instruments, years: parent.members[index].years }))
  }
}
