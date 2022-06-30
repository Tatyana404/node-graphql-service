export const Resolvers = {
  Query: {
    genres: async (
      _: undefined,
      __: Record<string, never>,
      { dataSources }: { dataSources: any }
    ) => dataSources.genresApi.getGenres(),
  },
};
