var dest = './webroot/dist'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    dest: dest + '/js'
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/main.js'
  }
}