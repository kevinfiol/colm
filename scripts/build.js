import { bundle, logSuccess, logError} from './bundle.js';

bundle({ minify: true })
    .then(logSuccess)
    .catch(e => logError(e.message));