import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: 'cjs'
        },
        plugins: [nodeResolve()]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.mjs',
            format: 'es'
        },
        plugins: [nodeResolve()]
    }
];