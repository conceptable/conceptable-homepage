const fs = require('fs');
const path = require('path');
const showdown = require('showdown');

// configure showdown
showdown.setFlavor('github');
showdown.setOption('noHeaderId', true);
const converter = new showdown.Converter();

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
