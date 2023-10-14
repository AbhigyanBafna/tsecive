import {defineField, defineType} from 'sanity'
import { validatePYQs } from '../lib/customValidations'

export default defineType({
  name: 'subjects',
  title: 'Subjects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Used to store a collection of PYQs for a specific subject as well as reference to Posts.',
    }),
    defineField({
      title: 'Branch',
      name: 'branch',
      type: 'string',
      options: {
        list: [
          { title: "Computer Science", value: "CS" },
          { title: "Information Technology", value: "IT" },
          { title: "Artificial Intelligence and Data Science", value: "AIDS" },
          { title: "Electronics and Telecommunication", value: "EXTC" },
          { title: "Chemical", value: "CHEM" },
        ],
      },
    }),
    defineField({
      name: 'PYQs',
      title: 'Previous Year Questions',
      type: 'array',
      of: [{type:'reference', to: {type: 'fileDoc'}}],
      validation: Rule => Rule.custom(validatePYQs),
    }),
  ],
})
