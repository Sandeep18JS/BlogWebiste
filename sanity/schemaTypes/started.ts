// schemas/blog.js
export default {
  name: 'gettingstarted',
  title: 'Getting Started',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },
  ],
}
