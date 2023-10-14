import {defineField, defineType} from 'sanity'
import { validateBranch } from '../lib/customValidations'

export default defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'postTitle',
      title: 'Title',
      type: 'string',
      description: 'Collection of all study material related to a specific topic.',
      // validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Part of URL used to identify post.',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        source: 'postTitle',
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
        // validation: (Rule) => Rule.required(),
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
        title: 'Subject',
        name: 'subject',
        type: 'array',
        of: [{type: 'reference', to: {type: 'subjects'}}],
        validation: (Rule) => Rule.custom(validateBranch),
    }),
    defineField({
      title: 'Module',
      name: 'module',
      type: 'string',
      options: {
        list: [
          { title: "Module 1", value: "mod1" },
          { title: "Module 2", value: "mod2" },
          { title: "Module 3", value: "mod3" },
          { title: "Module 4", value: "mod4" },
          { title: "Module 5", value: "mod5" },
          { title: "Module 6", value: "mod6" },
        ],
      },
  }),
  defineField({
    name: 'date',
    title: 'Date Created',
    type: 'date',
    // validation: Rule => Rule.required(),
    options: {
      dateFormat: 'DD-MM-YYYY',
    }
  }),
  defineField({
    name: 'files',
    title: 'Files',
    type: 'array',
    of: [{type: 'reference', to: {type: 'fileDoc'}}],
  }),
  defineField({
    name: 'links',
    title: 'Links',
    type: 'array',
    of: [{type: 'reference', to: {type: 'link'}}],
  }),

//     defineField({
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'tag'}}],
//     }),

//     defineField({
//       name: 'altPost',
//       title: 'Alt Post',
//       type: 'text',
//       description: 'A summary about the post.',
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       description: 'Best suited to 600 X 384 pixel images.',
//       type: 'blockContent',
//       validation: Rule => Rule.required(),
//     }),
  ],
})
