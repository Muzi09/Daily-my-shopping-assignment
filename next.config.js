/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      loader: 'file-loader',
      options: {
        publicPath: '/fonts',
        outputPath: 'static/fonts',
        name: '[name].[ext]'
      }
    })

    return config
  }
}




module.exports = nextConfig
