
const globule = require('globule');
const patterns = ['**/*.pug', '!**/_*.pug']
const test = globule.find(patterns, {srcBase: "src/pug"});
console.log(test);
const result = test[1].replace('.pug','.jsp');
console.log(result);
console.log(require('dotenv').config());
// 配列に .js系を入れ込む