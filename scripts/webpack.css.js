
module.exports = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        url: false,
        sourceMap: true,
        minimize: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        // PostCSS側でもソースマップを有効にする
        sourceMap: true,
        plugins: [
          // Autoprefixerを有効化
          // ベンダープレフィックスを自動付与する
          require('autoprefixer')({ grid: true }),
        ]
      }
    },
    // Sassをバンドルするための機能
    {
      loader: 'sass-loader',
      options: {
        // ソースマップの利用有無
        sourceMap: true,
      }
    }
  ]
}
