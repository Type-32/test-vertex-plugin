import {definePlugin} from '@type32/vertex-plugin'
import {h} from 'vue'
import View from './View.vue'
import './style.css'

export default definePlugin({
    setup(ctx) {
        const props = {version: ctx.plugin.version, logo: ctx.plugin.assetUrl('logo.svg')}
        ctx.views.panel({
            id: 'test-vertex-plugin',
            label: 'Test plugin',
            icon: 'i-lucide-flask-conical',
            defaultArea: 'right',
            component: async () => ({render: () => h(View, props)}),
        })
    },
})
