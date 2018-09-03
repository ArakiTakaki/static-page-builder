const HtmlPugPlugin = require('./scripts/webpack.pugs');
const PostCssRules = require('./scripts/webpack.css');

console.log(PostCssRules);

module.exports = {
  // mode の指定
  mode: "development",//development、production
  // エントリーポイント 複数指定可能
  entry: {
    "js/main":`${__dirname}/src/types/index.ts`,
    "style/master": `${__dirname}/src/sass/index.ts`
  },
  //　出力ファイルに関して
  output: {
    path: `${__dirname}/build/`,
    filename: 'asset/[name].js'
  },
  // 開発サーバの設定
  devServer: {
    // destディレクトリの中身を表示してね、という設定
    contentBase: `${__dirname}/build`,
    port: 3000,
    // contentBase以下のwebpackで管理していないファイルの更新でもリロードするように
    watchContentBase: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      PostCssRules
    ]
  },
  plugins: [
    ...HtmlPugPlugin
  ],
  resolve: {
    extensions: ['.pug', '.ts', '.sass','.html'],
  }
}