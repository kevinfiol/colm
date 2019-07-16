import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';

const isProd = process.env.PROD === 'true';
const isDev = process.env.DEV === 'true';

const config = {
    input: './src/index.js',
    output: {
        file: './dist/bundle.js',
        format: 'iife',
        sourcemap: isDev
    },
    plugins: [
        // JSON
        json({
            exclude: ['node_modules/**'],
            preferConst: true,
            compact: true
        }),

        // CSS
        postcss({
            extract: true,
            minimize: isProd,
            sourceMap: isDev
        }),

        nodeResolve(),
        commonjs(),
        buble({
            objectAssign: 'Object.assign',
            transforms: { dangerousTaggedTemplateString: true }
        }),

        // Production-only Plugins
        isProd && uglify.uglify(),

        // Development-only Plugins
        isDev && serve('dist'),
        isDev && livereload('dist')
    ]
};

export default config;