import test from 'ava';

import { rollup } from 'rollup';
import localResolve from '../dist/rollup-plugin-local-resolve';

test('Testing localResolve', (t) => rollup({
  input: 'test/files/index.js',
  plugins: [localResolve()],
}).then((stats) => {
  t.is(stats.cache.modules[0].id.endsWith('/files/folder/index.js'), true);
  t.is(stats.cache.modules[1].id.endsWith('/files/index.js'), true);
  t.is(stats.cache.modules.length, 2);
}));
