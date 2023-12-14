import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.GENRES_URL || 'http://localhost:3001/v1/genres'
  }

  willSendRequest (request: RequestOptions) {
    request.headers.set('Authorization', this.context.token)
  }

  async getGenres (limit = 5, offset = 0) {
    return await this.get(`/?limit=${limit}&offset=${offset}`)
  }

  async getGenre (id: string) {
    return await this.get(`/${id}`)
  }

  async createGenre (name: string, description: string, country: string, year: number) {
    return await this.post('/', { name, description, country, year })
  }

  async updateGenre (id: string, name: string, description: string, country: string, year: number) {
    return await this.put(`/${id}`, { name, description, country, year })
  }

  async deleteGenre (id: string) {
    return await this.delete(`/${id}`)
  }
}
