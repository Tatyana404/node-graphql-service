import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.ALBUMS_URL || 'http://localhost:3005/v1/albums'
  }

  willSendRequest (request: RequestOptions) {
    request.headers.set('Authorization', this.context.token)
  }

  async getAlbums (limit = 5, offset = 0) {
    return await this.get(`/?limit=${limit}&offset=${offset}`)
  }

  async getAlbum (id: string) {
    return await this.get(`/${id}`)
  }

  async createAlbum (name: string, released: number, artistsIds: string[], bandsIds: string[], trackIds: string[], genresIds: string[], image: string) {
    return await this.post('/', { name, released, artistsIds, bandsIds, trackIds, genresIds, image })
  }

  async updateAlbum (id: string, name: string, released: number, artistsIds: string[], bandsIds: string[], trackIds: string[], genresIds: string[], image: string) {
    return await this.put(`/${id}`, { name, released, artistsIds, bandsIds, trackIds, genresIds, image })
  }

  async deleteAlbum (id: string) {
    return await this.delete(`/${id}`)
  }
}
