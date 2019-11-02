<<<<<<< Updated upstream
#!/usr/bin/env node

require = require('esm')(module /*, options*/);
require('../src/index').run();
=======
#!/usr/bin/node --experimental-specifier-resolution=node

import { run } from '../src/run.js'

run()
>>>>>>> Stashed changes
