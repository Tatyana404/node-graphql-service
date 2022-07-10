# Graphql service

1. run "git pull https://github.com/rolling-scopes-school/node-graphql-service" and follow the installation instructions in the Readme.md file;

2. run "git pull https://github.com/Tatyana404/node-graphql-service" and then open this repository;

3. run "git checkout graphql-service";

4. rename .env.example to .env;

5. run "npm install";

6. run "npm run start" to launch the application, then open localhost:5000 in the browser;

> The following requests are available in the application:

+ artist - view one artist by id;
+ artists - see all artists;
+ genre - view one genre by id;
+ genres - see all genres;
+ track - view one track by id;
+ tracks - see all tracks;
+ band - view one band by id;
+ bands - see all bands;
+ album - view one album by id;
+ albums - see all albums;
+ jwt - get a token for mutations to work except for user registration (authorization);
+ user - get user by id;
+ favourites (available only for logged in user) - get genres, artists, bands and tracks added to the user's favorites;

> The following mutations are available in the application:

###### Artists
+ createArtist - create a new artist: 
{
  firstName: string
  secondName: string
  middleName: string
  birthDate: string
  birthPlace: string
  country: string
  bandsIds: string[]
  instruments: string[]
}
+ deleteArtist - delete an artist by his id;
+ updateArtist - update the artist by his id. Accepts the same fields object as when created;
###### Genres
+ createGenre - create a new genre:
{
  name: string
  description: string
  country: string
  year: string
} 
+ deleteGenre - delete an genre by his id;
+ updateGenre - update the genre by his id. Accepts the same fields object as when created;
###### Bands
+ createBand - create a new band:
{
  name: string
  origin: string
  members: 
  [{
    _id: string (artist id)
    instruments: string
    years: string[]
  }]
  website: string
  genresIds: string[]
} 
+ deleteBand - delete an band by his id;
+ updateBand - update the band by his id. Accepts the same fields object as when created;
###### Tracks
+ createTrack - create a new track:
{
  title: string
  albumId: string
  artistsIds: string[]
  bandsIds: string[]
  duration: number
  released: number
  genresIds: string[]
} 
+ deleteTrack - delete an track by his id;
+ updateTrack - update the track by his id. Accepts the same fields object as when created;
###### Albums
+ createAlbum - create a new album:
{
  name: string
  released: number
  artistsIds: string[]
  bandsIds: string[]
  trackIds: string[]
  genresIds: string[]
  image: string
} 
+ deleteAlbum - delete an album by his id;
+ updateAlbum - update the album by his id. Accepts the same fields object as when created;
###### Users
+ register - register a new user: 
{ 
  firstName: string
  lastName: string
  password: string
  email: string
}
###### Favourites
+ addTrackToFavourites - add track to user favorites:
{
  id: string (track id)
}
+ addBandToFavourites - add band to user favorites:
{
  id: string (band id)
}
+ addArtistToFavourites - add artist to user favorites:
{
  id: string (artist id)
}
+ addGenreToFavourites - add genre to user favorites:
{
  id: string (genre id)
}
