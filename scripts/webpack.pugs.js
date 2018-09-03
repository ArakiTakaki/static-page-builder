const HtmlWebpackPlugin = require('html-webpack-plugin');
function getWebpackPlugin(){
  const globule = require('globule');
  const dotenv = require('dotenv').config()
  const {LANG} = dotenv.parsed;
  const patterns = ['**/*.pug', '!**/_*.pug'];
  const pugs = globule.find(patterns,{srcBase:"src/pug/"});

  let output = [];
  for ( let pug of pugs){
    const tmp = {}
    tmp.filename = pug.replace('.pug',LANG);
    tmp.template = `src/pug/${pug}`;
    output.push(new HtmlWebpackPlugin(tmp));
  }
  return output;
}

module.exports = getWebpackPlugin();