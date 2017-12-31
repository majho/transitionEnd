import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    moduleName: 'onTransitionEnd',
    format: 'umd',
    plugins: [babel()],
    dest: 'dist/transition-end.js'
};
