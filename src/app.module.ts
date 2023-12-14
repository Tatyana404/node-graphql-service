import * as Favourites from './modules/favourites/favourites.module'
import * as Artists from './modules/artists/artists.module'
import * as Albums from './modules/albums/albums.module'
import * as Genres from './modules/genres/genres.module'
import * as Tracks from './modules/tracks/tracks.module'
import * as Bands from './modules/bands/bands.module'
import * as Users from './modules/users/users.module'

export const typeDefs = [
  Favourites.Schema,
  Artists.Schema,
  Albums.Schema,
  Genres.Schema,
  Tracks.Schema,
  Bands.Schema,
  Users.Schema
]

export const resolvers = [
  Favourites.Resolvers,
  Artists.Resolvers,
  Albums.Resolvers,
  Genres.Resolvers,
  Tracks.Resolvers,
  Bands.Resolvers,
  Users.Resolvers
]

export const api = {
  favourites: Favourites.Api,
  artists: Artists.Api,
  albums: Albums.Api,
  genres: Genres.Api,
  tracks: Tracks.Api,
  bands: Bands.Api,
  users: Users.Api
}
