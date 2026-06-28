import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nexis2db/',
  // TEMPORARY diagnostic build: keep readable function names + sourcemaps so the
  // swallowed Safari import error reports the real call site instead of "e of t".
  // Revert (remove the `build` block) once the failing line is identified.
  build: {
    minify: false,
    sourcemap: true,
  },
})
