import {defineConfig, Options} from "tsup"

export default defineConfig((opts: Options) => ({
  entry: ['src/index.ts'],
  format: ['cjs'],
  clean: true,
  ...opts
}))