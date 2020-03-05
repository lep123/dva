export default {
  alias: {
    '@': `${__dirname}/src`,
  },
  extraBabelPlugins: [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ]
  }