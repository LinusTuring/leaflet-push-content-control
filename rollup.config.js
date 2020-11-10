import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/leaflet-control-starter.js',
	output: {
		file: 'dist/leaflet-control-starter.js',
		format: 'umd',
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules,
		copy({
			targets: [
				{ src: 'src/leaflet-control-starter.css', dest: 'dist' }
			]
		}),
		production && terser() // minify, but only in production
	]
};
