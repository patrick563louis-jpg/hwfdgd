import { config, fields, collection, component } from '@keystatic/core';

// Common schema fields to avoid repetition
const commonSchema = (category: string, defaultImage: string) => ({
  title: fields.slug({ name: { label: 'العنوان' } }),
  description: fields.text({ label: 'الوصف المختصر', multiline: true }),
  pubDate: fields.date({ label: 'تاريخ النشر' }),
  category: fields.text({ label: 'التصنيف (لا تقم بتغييره)', defaultValue: category }),
  author: fields.text({ label: 'الكاتب', defaultValue: 'فريق خدمات الذكاء الاصطناعي' }),
  image: fields.image({ 
    label: 'صورة المقال الرئيسية',
    directory: 'public/media/images',
    publicPath: '/media/images/',
  }),
  content: fields.markdoc({ 
    label: 'المحتوى',
    components: {
      AdBlock: component({
        label: 'إعلان داخلي (AdSense)',
        schema: {
          slot: fields.text({ label: 'رقم Ad Slot (اختياري)', defaultValue: '5555555555' }),
        },
        preview: (props) => `[ إعلان AdSense - Slot: ${props.fields.slot.value} ]`,
      }),
    },
  }),
});

export default config({
  storage: import.meta.env.PROD 
    ? {
        kind: 'github',
        repo: 'patrick563louis-jpg/srvsblg',
      }
    : {
        kind: 'local',
      },
  collections: {
    ai_tools: collection({
      label: 'أدوات الذكاء الاصطناعي',
      path: 'src/content/posts/ai-tools/*',
      format: { contentField: 'content' },
      slugField: 'title',
      schema: {
        ...commonSchema('ai-tools', '/media/images/ai-automation.jpg'),
        toolType: fields.select({
          label: 'نوع الأداة',
          options: [
            { label: 'أتمتة', value: 'automation' },
            { label: 'كتابة', value: 'writing' },
            { label: 'تصميم', value: 'design' },
            { label: 'برمجة', value: 'coding' },
            { label: 'أخرى', value: 'other' },
          ],
          defaultValue: 'other',
        }),
      },
    }),
    money_ai: collection({
      label: 'الذكاء المالي (Money AI)',
      path: 'src/content/posts/money-ai/*',
      format: { contentField: 'content' },
      slugField: 'title',
      schema: {
        ...commonSchema('money-ai', '/media/images/money-ai.jpg'),
      },
    }),
    apps: collection({
      label: 'تطبيقاتنا',
      path: 'src/content/posts/apps/*',
      format: { contentField: 'content' },
      slugField: 'title',
      schema: {
        ...commonSchema('apps', '/media/images/app-website.jpg'),
        appType: fields.select({
          label: 'نوع التطبيق',
          options: [
            { label: 'موقع ويب', value: 'website' },
            { label: 'تطبيق موبايل', value: 'mobile' },
            { label: 'أخرى', value: 'other' },
          ],
          defaultValue: 'other',
        }),
      },
    }),
    ai_services: collection({
      label: 'خدمات الذكاء الاصطناعي',
      path: 'src/content/posts/ai-services/*',
      format: { contentField: 'content' },
      slugField: 'title',
      schema: {
        ...commonSchema('ai-services', '/media/images/ai-services.jpg'),
      },
    }),
  },
});
