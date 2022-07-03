import { RESTDataSource } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.ARTISTS_URL || 'http://localhost:3002/v1/artists'
  }

  async getArtists () {
    return await this.get('/')
  }

  async getArtist (id: string) {
    return await this.get(`/${id}`)
  }
}
