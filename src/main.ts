import { ApolloServer } from 'apollo-server'
import 'dotenv/config'
import { typeDefs, resolvers, api } from './app.module'

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => ({
    token: req.headers.authorization || ''
  }),
  dataSources: () => ({
    favouritesApi: new api.favourites(),
    artistsApi: new api.artists(),
    albumsApi: new api.albums(),
    genresApi: new api.genres(),
    tracksApi: new api.tracks(),
    bandsApi: new api.bands(),
    usersApi: new api.users()
  })
})

server.listen(PORT).then(({ url }: { url: string }) => console.log(`🚀  Server ready at ${url}`))
