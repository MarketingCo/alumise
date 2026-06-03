const fs = require('fs');
let services = fs.readFileSync('src/data/services.ts', 'utf8');

services = services.replace(
  /metaDescription:\s*"(Aluminium roof lanterns manufactured in Penicuik. Slimline rafters, self-cleaning glass, U-values from 1.0 W\/m²K.)"/g,
  'metaDescription: "Aluminium roof lanterns manufactured in Penicuik. Slimline rafters, self-cleaning glass, U-values from 1.0 W/m²K. Precision engineered for Edinburgh homes."'
);

services = services.replace(
  /metaDescription:\s*"(Commercial door systems for Edinburgh. DDA-compliant access, aluminium profiles, motion sensors, panic bar integration.)"/g,
  'metaDescription: "Commercial door systems for Edinburgh. DDA-compliant access, robust aluminium profiles, active motion sensors, and secure panic bar integration for businesses."'
);

services = services.replace(
  /metaDescription:\s*"(Conservatories manufactured in Penicuik for Edinburgh. Aluminium frames, self-cleaning glass, U-values from 1.2 W\/m²K.)"/g,
  'metaDescription: "Bespoke conservatories manufactured in Penicuik for Edinburgh homes. Thermally broken aluminium frames, self-cleaning glass, and U-values from 1.2 W/m²K."'
);

fs.writeFileSync('src/data/services.ts', services);
