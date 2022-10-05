import axios from "axios";

export default class fetchPosts {
  constructor() {
    this.url = `https://api.cosmicjs.com/v2/buckets/${
      import.meta.env.VITE_COSMIC_BUCKET
    }/objects`;

    this.url_categories = `https://api.cosmicjs.com/v2/buckets/${
      import.meta.env.VITE_COSMIC_BUCKET
    }/object-types`;
  }

  async getPosts(queryObj = null) {
    const params = {
      read_key: import.meta.env.VITE_COSMIC_APIKEY,
      limit: 10,
      sort: "created_at",
    };

    if (queryObj) params.query = { ...queryObj };

    return await axios
      .get(this.url, {
        params,
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
    const query = this.encode({ title: { $regex: title, $options: "i" } });

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

  async getCategories() {
    return await axios
      .get(
        `${this.url_categories}?read_key=${import.meta.env.VITE_COSMIC_APIKEY}`
      )
      .then((res) =>
        res.data.object_types.map((el) => {
          return { title: el.singular, slug: el.slug };
        })
      );
  }
}
