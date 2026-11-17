import {definePlugin} from '@type32/vertex-plugin'
import {h} from 'vue'
import View from './View.vue'
import './style.css'

export default definePlugin({
    setup(ctx) {
        const props = {version: ctx.plugin.version, logo: ctx.plugin.assetUrl('logo.svg'), t: ctx.i18n.t}
        ctx.views.panel({
            id: 'test-vertex-plugin',
            label: 'plugins.test-vertex-plugin.view',
            icon: 'i-lucide-flask-conical',
            defaultArea: 'right',
            component: async () => ({render: () => h(View, props)}),
        })
    },
})
