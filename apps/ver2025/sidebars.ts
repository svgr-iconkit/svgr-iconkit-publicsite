import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Intro',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Core',
      items: [
        'core/package',
        'core/properties',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      items: [
        'integration/with-styled-components',
        'integration/with-react-native-paper',
        'integration/with-nativebase',
        'integration/with-gluestack-ui',
        'integration/with-tailwindcss',
        'integration/with-nativewind',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'advanced-usage/create-owned-iconset',
        'advanced-usage/individual-use',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/expo-example',
        'examples/rating',
        'examples/nextjs-example',
      ],
    },
  ],
};

export default sidebars;
