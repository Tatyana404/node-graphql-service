import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL =
      process.env.FAVOURITES_URL || 'http://localhost:3007/v1/favourites'
  }

  willSendRequest (request: RequestOptions) {
    request.headers.set('Authorization', this.context.token)
  }

  async getFavourites () {
    return await this.get('/')
  }

  async addBandToFavourites (id: string) {
    return await this.put('/add', { id, type: 'bands' })
  }

  async addGenreToFavourites (id: string) {
    return await this.put('/add', { id, type: 'genres' })
  }

  async addArtistToFavourites (id: string) {
    return await this.put('/add', { id, type: 'artists' })
  }

  async addTrackToFavourites (id: string) {
    return await this.put('/add', { id, type: 'tracks' })
  }
}
