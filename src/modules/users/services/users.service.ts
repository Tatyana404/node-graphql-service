import { RESTDataSource } from 'apollo-datasource-rest'

export class Api extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = process.env.USERS_URL || 'http://localhost:3004/v1/users'
  }

  async getUser (id: string) {
    return await this.get(`/${id}`)
  }

  async loginUser (email: string, password: string) {
    return await this.post('/login', {
      email,
      password
    })
  }
}
