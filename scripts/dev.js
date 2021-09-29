import { bundle, logSuccess, logError } from './bundle.js';

bundle({
    minify: false,
    sourcemap: true,
    watch: {
        onRebuild(error) {
            if (error) logError(error);
            else logSuccess();
        }
    }
});