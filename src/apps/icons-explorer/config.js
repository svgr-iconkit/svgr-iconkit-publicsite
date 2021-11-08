

export const namespace = "@svgr-iconkit/";
export const pathPrefix = "/explorer/";

export const pageSize = 40;

export const iconsets = [
  {
    packageName: "fontawesome5",
    name: "FontAwesome5",
    version: "0.1.20",
    resources: () => import('./iconset/FontAwesome5'),
  },
  {
    packageName: "fontawesome5-brands",
    name: "FontAwesome5 - Brands",
    version: "0.1.20",
    resources: () => import('./iconset/FontAwesome5-brands'),
  },
  {
    packageName: "fluentui-system",
    name: "FluentUISystem",
    version: "0.1.20",
    resources: () => import('./iconset/FluentUISystem'),
  },
  {
    packageName: "feather",
    name: "Feather",
    version: "0.1.20",
    resources: () => import('./iconset/Feather'),
  },
  {
    packageName: "foundation",
    name: "Foundation",
    version: "0.1.20",
    resources: () => import('./iconset/FontAwesome5-brands'),
  },
  {
    packageName: "ant-design",
    name: "Ant Design Icons",
    defaultVariant: 'filled',
    version: "0.1.20",
    resources: () => import('./iconset/AntDesignIcon'),
  },
  {
    packageName: "entypo",
    name: "Entypo",
    version: "0.1.20",
    resources: () => import('./iconset/Entypo'),
  },
  {
    packageName: "ionicons",
    name: "Ionicons",
    version: "0.1.20",
    resources: () => import('./iconset/Ionicons'),
  },
  {
    packageName: "octicons",
    name: "Octicons",
    version: "0.1.20",
    resources: () => import('./iconset/Octicons'),
  },
  {
    packageName: "material-community",
    name: "Material Community",
    version: "0.1.20",
    resources: () => import('./iconset/MaterialCommunity'),
  },
  {
    packageName: "material-design",
    name: "Material Design Icons",
    version: "0.1.20",
    resources: () => import('./iconset/MaterialDesignIcons'),
  },
  {
    packageName: "bootstrap",
    name: "Bootstrap Icons",
    version: "0.1.20",
    resources: () => import('./iconset/BootstrapIcon'),
  },
  {
    packageName: "css-gg",
    name: "css.gg",
    version: "0.1.20",
    resources: () => import('./iconset/css.gg'),
  },
  {
    packageName: "heroicons",
    name: "Heroicons",
    defaultVariant: 'solid',
    version: "0.1.20",
    resources: () => import('./iconset/Heroicons'),
  },
  {
    packageName: "simple-icons",
    name: "Simple Icons",
    version: "0.1.20",
    resources: () => import('./iconset/SimpleIcons'),
  },
  {
    packageName: "typicons",
    name: "Typicons Icons",
    version: "0.1.20",
    resources: () => import('./iconset/Typicons'),
  },
  {
    packageName: "flag-icons",
    name: "Flag Icons",
    colorize: false,
    version: "0.2.0",
    resources: () => import('./iconset/FlagIcons'),
  },
  {
    packageName: "fontisto",
    name: "Fontisto",
    version: "0.2.0",
    resources: () => import('./iconset/Fontisto'),
  }
];

export const sortedPackageNames = iconsets.map( item => ({
  packageName: item.packageName,
  name: item.name,
  colorize: item.colorize,
}) ).sort((a, b) => {
  return String(a.name).localeCompare(b.name);
});