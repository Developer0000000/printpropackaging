import { defineField, defineType } from 'sanity'

export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [

        defineField({
            name: 'title',
            title: 'Product Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
            }
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            title: 'Top Description',
            name: 'description',
            type: 'text',
            // validation: (Rule) => Rule.required(),
        }),

        defineField({
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        

        defineField({
            title: 'Long Description',
            name: 'content',
            type: 'array',
            of: [
                { type: 'block' },
            ],
            validation: (Rule) => Rule.required(),
        }),

    ]
})
 