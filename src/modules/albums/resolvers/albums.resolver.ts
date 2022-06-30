export const Resolvers = {
  Query: {
    albums: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => dataSources.albumsApi.getAlbums(),
  },
};
