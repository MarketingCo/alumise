const fs = require('fs');

const services = fs.readFileSync('src/data/services.ts', 'utf8');
const locations = fs.readFileSync('src/data/locations.ts', 'utf8');
const products = fs.readFileSync('src/data/products.ts', 'utf8');
const blog = fs.readFileSync('src/data/blog.ts', 'utf8');

const regex = /metaDescription:\s*["']([^"']+)["']/g;

function check(file, content) {
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[1].length < 120) {
      console.log(`Short description in ${file}: (${match[1].length} chars) ${match[1]}`);
    }
  }
}

check('services.ts', services);
check('locations.ts', locations);
check('products.ts', products);
check('blog.ts', blog);
