import { config, fields, collection, component } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
  storage: isProd ? {
    kind: 'github',
    repo: {
      owner: 'abduelmorsi', // Replace with your GitHub Username
      name: 'jdmzn',                 // Replace with your Repository Name
    }
  } : {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        publishDate: fields.date({ label: 'Publish Date', defaultValue: { kind: 'today' } }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts',
            publicPath: '/images/posts/',
          },
          componentBlocks: {
            callout: component({
              label: 'Callout (تنبيه مخصص)',
              preview: () => null,
              schema: {
                type: fields.select({
                  label: 'نوع التنبيه (Type)',
                  options: [
                    { label: 'معلومات (Info)', value: 'info' },
                    { label: 'تحذير (Warning)', value: 'warning' },
                    { label: 'نجاح (Success)', value: 'success' },
                    { label: 'خطأ (Error)', value: 'error' },
                  ],
                  defaultValue: 'info',
                }),
                title: fields.text({ label: 'العنوان (Title)' }),
                content: fields.child({
                  kind: 'block',
                  placeholder: 'اكتب محتوى التنبيه هنا...',
                  formatting: {
                    inlineMarks: 'inherit',
                    softBreaks: 'inherit',
                  },
                  links: 'inherit',
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});
