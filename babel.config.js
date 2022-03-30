module.exports = {
  presets: [[require.resolve("@docusaurus/core/lib/babel/preset")]],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "^react-native$": "react-native-web",
        },
      },
    ],
    ["styled-components", { ssr: true }],
  ],
};
