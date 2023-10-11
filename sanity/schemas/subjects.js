import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subjects',
  title: 'Subjects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
  ],
})
