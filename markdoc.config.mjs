import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  variables: {
    user: {
      name: 'زائرنا العزيز',
      role: 'كاتب ومراجع للتدوينات'
    }
  },
  tags: {
    callout: {
      render: component('./src/components/Callout.astro'),
      attributes: {
        type: { type: String, default: 'info' },
        title: { type: String }
      }
    }
  }
});
