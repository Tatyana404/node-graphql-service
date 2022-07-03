import { RESTDataSource } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.BANDS_URL || 'http://localhost:3003/v1/bands'
  }

  async getBands () {
    return await this.get('/')
  }

  async getBand (id: string) {
    return await this.get(`/${id}`)
  }
}
