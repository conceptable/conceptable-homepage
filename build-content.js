const fs = require('fs');
const path = require('path');
const showdown = require('showdown');

const noPTagAroundImgTag = {
  type: 'output',
  filter: function(text, converter) {
    text = text.replace(/<p><img/ig, '<img');
    text = text.replace(/ \/><\/p>/ig, ' />');
    return text;
  }
};

// configure showdown
showdown.setFlavor('github');
showdown.setOption('noHeaderId', true);
const converter = new showdown.Converter({extensions: [noPTagAroundImgTag]});

// read content file names
const markdowns = fs.readdirSync('./content').filter(f => f.endsWith('.md'));

// convert markdown into html and aggregate them into one big data object
const data = markdowns.reduce((memo, markdown) => {
  const key = path.basename(markdown, '.md');
  const html = converter.makeHtml(fs.readFileSync(`./content/${markdown}`, 'utf-8'));
  memo[key] = html;
  return memo;
}, {});

// output data object as JSON
console.log(JSON.stringify(data));
