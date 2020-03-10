export default {
  alias: {
    '@': `${__dirname}/src`,
    '@@': `${__dirname}/src/components`,
  },
  extraBabelPlugins: [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ],
  disableCSSModules: true,
  proxy: {
    '/api': {
      target: 'https://blogs.zdldove.top/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      }
    }
  }
  }