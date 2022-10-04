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

  async getPostsByTitle(title) {
    const query = encodeURI(
      JSON.stringify({ title: { $regex: title, $options: "i" } })
    );

    const link = `${this.url}?read_key=${
      import.meta.env.VITE_COSMIC_APIKEY
    }&limit=10&query=${query}`;

    return await axios.get(link).then((res) => res.data);
  }

  async getPostsBySlug(slug) {
    return await axios
      .get(this.url, {
        params: {
          read_key: import.meta.env.VITE_COSMIC_APIKEY,
          limit: 1,
          query: {
            slug,
          },
        },
      })
      .then((res) => res.data?.objects);
  }
}
