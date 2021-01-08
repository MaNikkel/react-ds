import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
        typescript({
          typescript: require('typescript'),
        }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
