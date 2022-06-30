export const Resolvers = {
  Query: {
    artists: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => dataSources.artistsApi.getArtists(),
  },
};
