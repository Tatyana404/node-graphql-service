export const Resolvers = {
  Query: {
    tracks: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => dataSources.tracksApi.getTracks(),
  },
};
