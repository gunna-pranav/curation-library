export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tag Name',
      type: 'string',
      validation: (Rule: any) => Rule.required().unique(),
    },
    {
      name: 'tagType',
      title: 'Tag Type',
      type: 'string',
      options: {
        list: [
          { title: 'Aesthetic', value: 'aesthetic' },
          { title: 'Material', value: 'material' },
          { title: 'Color', value: 'color' },
          { title: 'Style', value: 'style' },
          { title: 'Context', value: 'context' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'usageCount',
      title: 'Usage Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagType',
    },
  },
}