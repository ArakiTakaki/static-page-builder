const HtmlPugPlugin = require('./scripts/webpack.pugs');
const PostCssRules = require('./scripts/webpack.css');

console.log(PostCssRules);

module.exports = {
  // mode の指定
  mode: "development",//development、production
  // エントリーポイント 複数指定可能
  entry: {
    "js/main":`${__dirname}/src/types/index.ts`,
    "style/master": `${__dirname}/src/sass/main.sass`
  },
  //　出力ファイルに関して
  output: {
    path: `${__dirname}/build/`,
    filename: 'asset/[name].js'
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
    extensions: ['.pug', '.ts', '.js', '.sass','.html'],
  },

  // 開発サーバの設定
  devServer: {
    // buildを見に行く
    contentBase: `${__dirname}/build/`,
    port: 3000,
    inline: true,
    hot: true,
    // contentBase以下のwebpackで管理していないファイルの更新でもリロードするように
    watchContentBase: true
  },
}