// A fixture for Vertex's plugin install and update tests (its Plugin Architecture Plan, C2b). `dev` holds this source;
// the `dist` branch and the releases' `plugin.zip` hold what `bun run build` writes to `dist/`.
//
// `@type32/vertex-plugin` isn't published yet: build beside a checkout of Vertex whose SDK is built
// (`bun run build` in its `packages/vertex-plugin`), with `ln -s ../vertex/node_modules node_modules` here.
import vue from '@vitejs/plugin-vue'
import {vertex} from '@type32/vertex-plugin/vite'
import {defineConfig} from 'vite'

export default defineConfig({plugins: [vue(), vertex()]})
