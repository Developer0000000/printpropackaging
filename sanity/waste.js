// import { defineField, defineType, defineArrayMember } from 'sanity'

// export const product = defineType({
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     // fields: [
//     //     {
//     //         name: 'cover',
//     //         title: 'Cover',
//     //         type: 'image',
//     //         validation: (Rule) => Rule.required(),
//     //     },
//     //     {
//     //         name: 'id',
//     //         title: 'Id',
//     //         type: 'string',
//     //         validation: (Rule) => Rule.required(),
//     //     },
//     //     {
//     //         name: 'title',
//     //         title: 'Title',
//     //         type: 'string',
//     //         validation: (Rule) => Rule.required(),
//     //     },
//     //     {
//     //         name: 'summary',
//     //         title: 'Summary',
//     //         type: 'text',
//     //         validation: (Rule) => Rule.required(),
//     //     },
//     //     {
//     //         name: 'main',
//     //         title: 'Main',
//     //         type: 'boolean',
//     //         validation: (Rule) => Rule.required(),
//     //     },
//     //     {
//     //         name: 'language',
//     //         title: 'Language',
//     //         type: 'string',
//     //         options: {
//     //             list: [
//     //                 { title: 'English', value: 'english' },
//     //                 { title: 'Japanese', value: 'japanese' },
//     //                 { title: 'Vietnamese', value: 'vietnamese' },
//     //             ],
//     //         },
//     //         validation: (Rule) => Rule.required(),
//     //     },
//     //     {
//     //         name: 'whatsInside',
//     //         title: "What's Inside",
//     //         type: 'text',
//     //     },
//     //     {
//     //         name: 'learningPoints',
//     //         title: 'Learning Points',
//     //         type: 'array',
//     //         of: [{ type: 'string' }],
//     //     },
//     //     {
//     //         name: 'authorAbout',
//     //         title: 'About the Author',
//     //         type: 'text',
//     //     },
//     //     {
//     //         name: 'keyPoints',
//     //         title: 'Key Points/Chapters',
//     //         type: 'array',
//     //         of: [
//     //             {
//     //                 type: 'object',
//     //                 fields: [
//     //                     {
//     //                         name: 'title',
//     //                         title: 'Title',
//     //                         type: 'string',
//     //                         validation: (Rule) => Rule.required(),
//     //                     },
//     //                     {
//     //                         name: 'content',
//     //                         title: 'Content',
//     //                         type: 'array',
//     //                         of: [{ type: 'text' }],
//     //                     },
//     //                     {
//     //                         name: 'audio',
//     //                         title: 'Audio',
//     //                         type: 'file',
//     //                         options: {
//     //                             accept: 'audio/*',
//     //                         },
//     //                     },
//     //                 ],
//     //             },
//     //         ],
//     //     },
//     //     {
//     //         name: 'time',
//     //         title: 'Time To Read',
//     //         type: 'string',
//     //     },
//     //     {
//     //         name: 'views',
//     //         title: 'Views',
//     //         type: 'number',
//     //     },
//     //     {
//     //         name: 'category',
//     //         title: 'Category',
//     //         type: 'array',
//     //         of: [{ type: 'reference', to: [{ type: 'category' }] }],
//     //     },

//     //     {
//     //         name: 'collection',
//     //         title: 'Collection',
//     //         type: 'array',
//     //         of: [{ type: 'reference', to: [{ type: 'collection' }] }],
//     //     },
//     // ],

//     fields: [
//         defineField({
//             name: 'title',
//             title: 'Product Title',
//             type: 'string',
//             // description: 'Make it catchy',
//             // validation: Rule => Rule.max(10).warning(`A title shouldn't be more than 120 characters.`)
//             // validation: Rule => Rule.max(10).error(`A title shouldn't be more than 120 characters.`)

//             validation: (Rule) => Rule.required(),
//         })
//         // {
//         //     name: 'gender',
//         //     title: 'Gender',
//         //     type: 'string',
//         //     options: {
//         //         list: [
//         //             { title: 'Men', value: 'men' },
//         //             { title: 'Women', value: 'women' },
//         //         ],
//         //         layout: 'radio',
//         //         direction: 'horizontal',
//         //     },
//         // }

// defineField({
//     title: 'Author',
//     name: 'author',
//     type: 'reference',
//     to: [
//         { type: 'author' },
//     ],
// }),

// defineField({
//     title: 'Content',
//     name: 'content',
//     type: 'array',
//     of: [
//         defineArrayMember({
//             title: 'Block',
//             type: 'block',
//             // Styles let you set what your user can mark up blocks with. These
//             // correspond with HTML tags, but you can set any title or value
//             // you want and decide how you want to deal with it where you want to
//             // use your content.
//             styles: [
//                 { title: 'Normal', value: 'normal' },
//                 { title: 'H1', value: 'h1' },
//                 { title: 'H2', value: 'h2' },
//                 { title: 'H3', value: 'h3' },
//                 { title: 'H4', value: 'h4' },
//                 { title: 'Quote', value: 'blockquote' },
//             ],
//             lists: [{ title: 'Bullet', value: 'bullet' }],
//             // Marks let you mark up inline text in the block editor.
//             marks: {
//                 // Decorators usually describe a single property – e.g. a typographic
//                 // preference or highlighting by editors.
//                 decorators: [
//                     { title: 'Strong', value: 'strong' },
//                     { title: 'Emphasis', value: 'em' },
//                 ],
//                 // Annotations can be any object structure – e.g. a link or a footnote.
//                 annotations: [
//                     {
//                         title: 'URL',
//                         name: 'link',
//                         type: 'object',
//                         fields: [
//                             {
//                                 title: 'URL',
//                                 name: 'href',
//                                 type: 'url',
//                             },
//                         ],
//                     },
//                 ],
//             },
//         }),
//         // You can add additional types here. Note that you can't use
//         // primitive types such as 'string' and 'number' in the same array
//         // as a block type.
//         defineArrayMember({
//             type: 'image',
//             options: { hotspot: true },
//         }),
//     ],
// }),

//     ]
// })

