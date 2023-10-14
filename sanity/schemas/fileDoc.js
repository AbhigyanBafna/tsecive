import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fileDoc',
  title: 'File Documents',
  type: 'document',
  fields: [
    defineField({
      name: 'fileName',
      title: 'File Name',
      type: 'string',
      description: 'Collection of all Files in the database. Used as references in posts and subjects.',
    }),
    defineField({
      name: 'fileType',
      title: 'File Type',
      type: 'string',
      options: {
        list: [
          { title: "PDF", value: "pdf" },
          { title: "Word Document", value: "docx" },
          { title: "Power Point Presentation", value: "pptx" },
          { title: "Code File", value: "code" },
          { title: "Image", value: "img" },
          { title: "Previous Year Questions", value: "pyq" },
        ],
      },
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
  ],
})
