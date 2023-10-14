import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'linkTitle',
      title: 'Title',
      type: 'string',
      description: 'Collection of Links used in the database. Used as references in posts.',
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: "Video Lecture", value: "vid" },
          { title: "Code Repository", value: "codeRepo" },
          { title: "Blog/Article", value: "blog" },
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
