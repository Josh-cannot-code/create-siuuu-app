/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'url-loader',
      },
    })
    return config
  },
}
