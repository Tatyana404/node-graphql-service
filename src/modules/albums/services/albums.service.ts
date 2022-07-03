import { RESTDataSource } from "apollo-datasource-rest";

export class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL || "http://localhost:3005/v1/albums";
  }

  async getAlbums() {
    return await this.get('/');
  }

  async getAlbum (id: string) {
    return await this.get(`/${id}`)
  }
}
