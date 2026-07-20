export const schema = [
  {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
      { name: 'title', title: 'Post Title', type: 'string' },
      { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' } },
      { name: 'content', title: 'Main Content', type: 'text' }, // We use plain text here for simplicity, but you can upgrade to Portable Text later
      {
        name: 'seo',
        title: 'SEO Settings',
        type: 'object',
        fields: [
          { name: 'metaTitle', title: 'Meta Title', type: 'string' },
          { name: 'metaDescription', title: 'Meta Description', type: 'text' },
          { 
            name: 'keywords', 
            title: 'Keywords', 
            type: 'array', 
            of: [{ type: 'string' }], 
            options: { layout: 'tags' } 
          }
        ]
      }
    ]
  }
];