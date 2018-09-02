const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // mode の指定
  mode: "development",//development、production
  // エントリーポイント 複数指定可能
  entry: `${__dirname}/src/types/index.ts`,
  //　出力ファイルに関して
  output: {
    path: `${__dirname}/build/`,
    filename: 'asset/js/bundle.js'
  },
  // 開発サーバの設定
  devServer: {
    // destディレクトリの中身を表示してね、という設定
    contentBase: `${__dirname}/build`,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'css-loader', options:{minimize: true} },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'about/test.html',
      template: 'src/pug/test.pug'
    }),
  ],
  resolve: {
    extensions: ['.pug', '.ts', '.sass'],
  }
}