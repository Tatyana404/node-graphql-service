import { RESTDataSource } from "apollo-datasource-rest";

export class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL || "http://localhost:3001/v1/genres";
  }

  async getGenres() {
    return await this.get("/");
  }
}
