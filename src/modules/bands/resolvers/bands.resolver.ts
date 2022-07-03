import { Member, Band } from '../../../types/band'

export const Resolvers = {
  Query: {
    bands: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => await dataSources.bandsApi.getBands(),
    band: async (
      _: undefined,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => await dataSources.bandsApi.getBand(id)
  },
  Member: {
    id: (parent: Member) => parent._id
  },
  Band: {
    id: (parent: Band) => parent._id,
    genres: (parent: Band) => parent.genresIds
  }
}
