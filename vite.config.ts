// A fixture for Vertex's plugin install and update tests (its Plugin Architecture Plan, C2b). `dev` holds this source;
// the `dist` branch and the releases' `plugin.zip` hold what `bun run build` writes to `dist/`.
//
// `@type32/vertex-plugin` (Vertex's plugin SDK) isn't published yet, so `package.json` takes it from a checkout of
// Vertex beside this folder (`../vertex`), after `bun run build` in its `packages/vertex-plugin`.
import vue from '@vitejs/plugin-vue'
import {vertex} from '@type32/vertex-plugin/vite'
import {defineConfig} from 'vite'

export default defineConfig({plugins: [vue(), vertex()]})
