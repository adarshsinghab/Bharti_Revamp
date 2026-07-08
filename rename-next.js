const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, search, replace) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(search)) {
    const updated = content.split(search).join(replace);
    fs.writeFileSync(filePath, updated, 'utf8');
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.txt') || file.endsWith('.json')) {
      replaceInFile(fullPath, '/_next/', '/assets/');
      replaceInFile(fullPath, '_next/static', 'assets/static');
    }
  }
}

const outDir = path.join(__dirname, 'out');
const oldPath = path.join(outDir, '_next');
const newPath = path.join(outDir, 'assets');

if (fs.existsSync(oldPath)) {
  if (fs.existsSync(newPath)) {
    fs.rmSync(newPath, { recursive: true, force: true });
  }
  fs.renameSync(oldPath, newPath);
  console.log('Renamed _next to assets successfully.');
}

processDirectory(outDir);
console.log('Replaced all _next occurrences with assets in out files.');
