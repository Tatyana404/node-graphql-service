import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.TRACKS_URL || 'http://localhost:3006/v1/tracks'
  }

  willSendRequest (request: RequestOptions) {
    request.headers.set('Authorization', this.context.token)
  }

  async getTracks (limit = 5, offset = 0) {
    return await this.get(`/?limit=${limit}&offset=${offset}`)
  }

  async getTrack (id: string) {
    return await this.get(`/${id}`)
  }

  async createTrack (title: string, albumId: string, artistsIds: string[], bandsIds: string[], duration: number, released: number, genresIds: string[]) {
    return await this.post('/', { title, albumId, artistsIds, bandsIds, duration, released, genresIds })
  }

  async updateTrack (id: string, title: string, albumId: string, artistsIds: string[], bandsIds: string[], duration: number, released: number, genresIds: string[]) {
    return await this.put(`/${id}`, { id, title, albumId, artistsIds, bandsIds, duration, released, genresIds })
  }

  async deleteTrack (id: string) {
    return await this.delete(`/${id}`)
  }
}
