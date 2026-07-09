const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

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
      replaceInFile(fullPath, '/_next/', 'assets/');
      replaceInFile(fullPath, '_next/static', 'assets/static');
      replaceInFile(fullPath, '/img/', 'img/');
      replaceInFile(fullPath, '/video/', 'video/');
      replaceInFile(fullPath, '/favicon.ico', 'favicon.ico');
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

// Remove large unused videos if they are copied from public
const campusPath = path.join(outDir, 'campus.mp4');
const campusOptPath = path.join(outDir, 'campus_opt.mp4');
if (fs.existsSync(campusPath)) fs.unlinkSync(campusPath);
if (fs.existsSync(campusOptPath)) fs.unlinkSync(campusOptPath);
console.log('Cleaned up master video files from out directory.');

// Zip the directory using archiver (which uses standard forward slashes '/')
function zipDirectory(sourceDir, outPath) {
  const archive = new archiver.ZipArchive({ zlib: { level: 9 } });
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

const zipPath = path.join(__dirname, 'deploy.zip');
zipDirectory(outDir, zipPath)
  .then(() => {
    console.log('Successfully created cross-platform deploy.zip with forward slashes.');
  })
  .catch(err => {
    console.error('Failed to create zip file:', err);
  });
