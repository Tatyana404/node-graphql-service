import { ApolloServer } from "apollo-server";
import "dotenv/config";
import { typeDefs, resolvers, api } from "./app.module";

const PORT: number = parseInt(process.env.PORT as string) || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  dataSources: () => {
    return {
      artistsApi: new api.artists(),
      albumsApi: new api.albums(),
      genresApi: new api.genres(),
      tracksApi: new api.tracks(),
      bandsApi: new api.bands(),
    };
  },
});

server
  .listen(PORT)
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
