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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Part of URL used to identify post.',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      title: 'Semester',
      name: 'sem',
      type: 'string',
      options: {
        list: [
          { title: "Semester 1", value: "sem1" },
          { title: "Semester 2", value: "sem2" },
          { title: "Semester 3", value: "sem3" },
          { title: "Semester 4", value: "sem4" },
          { title: "Semester 5", value: "sem5" },
          { title: "Semester 6", value: "sem6" },
          { title: "Semester 7", value: "sem7" },
          { title: "Semester 8", value: "sem8" },
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
