import { defineField, defineType } from 'sanity'

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [

        defineField({
            name: 'title',
            title: 'Category Title',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            // validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required(),
        }) 

    ]
})
