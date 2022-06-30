export const Resolvers = {
  Query: {
    bands: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => dataSources.bandsApi.getBands(),
  },
};
