

export const namespace = "@svgr-iconkit/";
export const pathPrefix = "/explorer/";

export const pageSize = 40;

export const iconsets = [
  {
    packageName: "fontawesome5",
    name: "FontAwesome5",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Font Awesome",
      "url": "https://www.npmjs.com/package/@fortawesome/fontawesome-free"
    },
    resources: () => import('./iconset/FontAwesome5'),
  },
  {
    packageName: "fontawesome5-brands",
    name: "FontAwesome5 - Brands",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Font Awesome",
      "url": "https://www.npmjs.com/package/@fortawesome/fontawesome-free"
    },
    resources: () => import('./iconset/FontAwesome5-brands'),
  },
  {
    packageName: "fluentui-system",
    name: "FluentUISystem",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "@fluentui/svg-icons by Microsoft",
      "url": "https://github.com/microsoft/fluentui-system-icons.git"
    },
    resources: () => import('./iconset/FluentUISystem'),
  },
  {
    packageName: "feather",
    name: "Feather",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Feather by Cole Bemis & Contributors",
      "url": "https://feathericons.com"
    },
    resources: () => import('./iconset/Feather'),
  },
  {
    packageName: "foundation",
    name: "Foundation",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Foundation by ZURB, Inc",
      "url": "https://zurb.com/playground/foundation-icon-fonts-3"
    },
    resources: () => import('./iconset/FontAwesome5-brands'),
  },
  {
    packageName: "ant-design",
    name: "Ant Design Icons",
    defaultVariant: 'filled',
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Ant Design Icons",
      "url": "https://npmjs.com/package/@ant-design/icons"
    },
    resources: () => import('./iconset/AntDesignIcon'),
  },
  {
    packageName: "entypo",
    name: "Entypo",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Entypo by Daniel Bruce & Contributors",
      "url": "https://github.com/geakstr/entypo-icons"
    },
    resources: () => import('./iconset/Entypo'),
  },
  {
    packageName: "ionicons",
    name: "Ionicons",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "ionicons by Ionic framework",
      "url": "https://ionic.io/ionicons"
    },
    resources: () => import('./iconset/Ionicons'),
  },
  {
    packageName: "octicons",
    name: "Octicons",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Octicons by Primer",
      "url": "https://primer.style/octicons/"
    },
    resources: () => import('./iconset/Octicons'),
  },
  {
    packageName: "material-community",
    name: "Material Community",
    version: "0.1.20",
    license: "Apache-2.0",
    "originalAuthor": {
      "name": "Material Design Icons by community",
      "url": "https://github.com/google/material-design-icons"
    },
    resources: () => import('./iconset/MaterialCommunity'),
  },
  {
    packageName: "material-design",
    name: "Material Design Icons",
    version: "0.1.20",
    license: "Apache-2.0",
    "originalAuthor": {
      "name": "Material Design Icons by Google",
      "url": "https://github.com/google/material-design-icons"
    },
    resources: () => import('./iconset/MaterialDesignIcons'),
  },
  {
    packageName: "bootstrap",
    name: "Bootstrap Icons",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Bootstrap Icons",
      "url": "https://icons.getbootstrap.com/"
    },
    resources: () => import('./iconset/BootstrapIcon'),
  },
  {
    packageName: "css-gg",
    name: "css.gg",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "css.gg",
      "url": "https://css.gg/"
    },
    resources: () => import('./iconset/css.gg'),
  },
  {
    packageName: "heroicons",
    name: "Heroicons",
    defaultVariant: 'solid',
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Heroicons",
      "url": "https://npmjs.com/package/heroicons"
    },
    resources: () => import('./iconset/Heroicons'),
  },
  {
    packageName: "simple-icons",
    name: "Simple Icons",
    version: "0.1.20",
    license: "MIT",
    "originalAuthor": {
      "name": "Simple Icons",
      "url": "https://npmjs.com/package/simple-icons"
    },
    resources: () => import('./iconset/SimpleIcons'),
  },
  {
    packageName: "typicons",
    name: "Typicons Icons",
    version: "0.1.20",
    "license": "CC-BY-SA",
    "originalAuthor": {
      "name": "Typicons",
      "url": "https://www.s-ings.com/typicons"
    },
    resources: () => import('./iconset/Typicons'),
  },
  {
    packageName: "flag-icons",
    name: "Flag Icons",
    colorize: false,
    version: "0.2.0",
    license: "MIT",
    "originalAuthor": {
      "name": "flag-icons",
      "url": "https://flagicons.lipis.dev/"
    },
    resources: () => import('./iconset/FlagIcons'),
  },
  {
    packageName: "fontisto",
    name: "Fontisto",
    version: "0.2.0",
    license: "MIT",
    "originalAuthor": {
      "name": "Fontisto by Kenan Gündoğan",
      "url": "http://fontisto.com"
    },
    resources: () => import('./iconset/Fontisto'),
  },
  {
    packageName: "flat-color-icons",
    name: "Flat Color Icons",
    version: "0.2.0",
    license: "MIT",
    "originalAuthor": {
      "name": "flat-color-icons",
      "url": "https://github.com/icons8/flat-color-icons"
    },
    resources: () => import('./iconset/FlatColorIcons'),
  },
  {
    packageName: "tabler-icons",
    name: "Tabler Icons",
    version: "0.2.0",
    license: "MIT",
    "originalAuthor": {
      "name": "tabler-icons",
      "url": "https://tabler-icons.io/"
    },
    resources: () => import('./iconset/TablerIcons'),
  },
  {
    packageName: "xnix",
    name: "Xnix",
    version: "0.2.0",
    license: "MIT",
    "originalAuthor": {
      "name": "Akshay Syal",
      "url": "https://syaluiux.gumroad.com/l/Xnix500"
    },
    resources: () => import('./iconset/XnixIcons'),
  },
  {
    packageName: "themify-icons",
    name: "Themify Icons",
    version: "0.2.0",
    license: "MIT",
    "originalAuthor": {
      "name": "Themify Icons",
      "url": "https://themify.me/themify-icons"
    },
    resources: () => import('./iconset/ThemifyIcons'),
  }
];

export const sortedPackageNames = iconsets.map( item => ({
  packageName: item.packageName,
  name: item.name,
  colorize: item.colorize,
}) ).sort((a, b) => {
  return String(a.name).localeCompare(b.name);
});