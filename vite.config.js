/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/transition-end.js'),
            name: 'transitionEnd',
            fileName: (format) => `transition-end.${format}.js`,
        },
        outDir: path.resolve(__dirname, 'lib'),
    },
});
