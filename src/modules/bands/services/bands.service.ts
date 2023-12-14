import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { Member } from './../../../types/band'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.BANDS_URL || 'http://localhost:3003/v1/bands'
  }

  willSendRequest (request: RequestOptions) {
    request.headers.set('Authorization', this.context.token)
  }

  async getBands (limit = 5, offset = 0) {
    return await this.get(`/?limit=${limit}&offset=${offset}`)
  }

  async getBand (id: string) {
    return await this.get(`/${id}`)
  }

  async createBand (name: string, origin: string, members: Member[], website: string, genresIds: string[]) {
    return await this.post('/', { name, origin, members, website, genresIds })
  }

  async updateBand (id: string, name: string, origin: string, members: Member[], website: string, genresIds: string[]) {
    return await this.put(`/${id}`, { name, origin, members, website, genresIds })
  }

  async deleteBand (id: string) {
    return await this.delete(`/${id}`)
  }
}
