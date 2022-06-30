import { RESTDataSource } from "apollo-datasource-rest";

export class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL || "http://localhost:3005/v1/artists";
  }

  async getAlbums() {
    return await this.get("/");
  }
}
