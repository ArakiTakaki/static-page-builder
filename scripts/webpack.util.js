const HtmlWebpackPlugin = require('html-webpack-plugin');
// {
//   filename: 'test.html',
//   template: 'src/pug/test.pug'
// }
const globule = require('globule');
const patterns = ['**/*.pug', '!**/_*.pug']
const test = globule.find(patterns, {srcBase: "src/pug"});
console.log(test);
const result = test[1].replace('.pug','.jsp');
console.log(require('dotenv').config());

export default function(){

}