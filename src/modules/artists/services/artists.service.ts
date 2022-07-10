import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.ARTISTS_URL || 'http://localhost:3002/v1/artists'
  }

  willSendRequest (request: RequestOptions) {
    request.headers.set('Authorization', this.context.token)
  }

  async getArtists (limit = 5, offset = 0) {
    return await this.get(`/?limit=${limit}&offset=${offset}`)
  }

  async getArtist (id: string) {
    return await this.get(`/${id}`)
  }

  async createArtist (firstName: string, secondName: string, middleName: string, birthDate: string, birthPlace: string, country: string, bandsIds: string[], instruments: string[]) {
    return await this.post('/', { firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments })
  }

  async updateArtist (id: string, firstName: string, secondName: string, middleName: string, birthDate: string, birthPlace: string, country: string, bandsIds: string[], instruments: string[]) {
    return await this.put(`/${id}`, { firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments })
  }

  async deleteArtist (id: string) {
    return await this.delete(`/${id}`)
  }
}
