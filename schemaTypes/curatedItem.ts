export default {
  name: 'curatedItem',
  title: 'Curated Item',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Furniture', value: 'furniture' },
          { title: 'Fashion', value: 'fashion' },
          { title: 'Drinkware', value: 'drinkware' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Home', value: 'home' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'productUrl',
      title: 'Product URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'yourNote',
      title: 'Your Note',
      type: 'text',
      options: {
        maxLength: 500,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
    {
      name: 'discoveryDate',
      title: 'Discovery Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isPublic',
      title: 'Public (Show in Portfolio)',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'productName',
      subtitle: 'companyName',
      media: 'images.0',
    },
  },
}