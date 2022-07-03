import { RESTDataSource } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.TRACKS_URL || 'http://localhost:3006/v1/tracks'
  }

  async getTracks () {
    return await this.get('/')
  }

  async getTrack (id: string) {
    return await this.get(`/${id}`)
  }
}
