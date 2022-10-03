import axios from "axios";

export default class fetchPosts {
  constructor() {
    this.url = `https://api.cosmicjs.com/v2/buckets/${
      import.meta.env.VITE_COSMIC_BUCKET
    }/objects`;
  }

  async getPosts() {
    return await axios
      .get(this.url, {
        params: {
          read_key: import.meta.env.VITE_COSMIC_APIKEY,
          limit: 10,
        },
      })
      .then((res) => res.data);
  }

  async getPostById(id) {
    return await axios
      .get(`${this.url}/${id}`, {
        params: {
          read_key: import.meta.env.VITE_COSMIC_APIKEY,
          limit: 10,
        },
      })
      .then((res) => res.data);
  }
}
