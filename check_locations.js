const fs = require('fs');
let locations = fs.readFileSync('src/data/locations.ts', 'utf8');

// There are no metaDescriptions in locations.ts, only 'description'. Let's check how long they are.
const regex = /description:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(locations)) !== null) {
  if (match[1].length < 120) {
    console.log(`Short description in locations.ts: (${match[1].length} chars) ${match[1]}`);
  }
}
