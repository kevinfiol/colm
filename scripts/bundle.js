import esbuild from 'esbuild';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const ENTRY = '../src/index.js';
const OUTPUT = '../dist/bundle.js';

export function bundle(config = {}) {
    return esbuild.build({
        format: 'iife',
        entryPoints: [join(__dirname, ENTRY)],
        bundle: true,
        outfile: join(__dirname, OUTPUT),
        jsxFactory: 'h',
        jsxFragment: 'h.Fragment',
        ...config
    });
}

export const logSuccess = () => console.log('\x1b[42m%s\x1b[0m', `Bundled: ${join(__dirname, OUTPUT)}`);
export const logError = message => console.error('\x1b[41m%s\x1b[0m', message);