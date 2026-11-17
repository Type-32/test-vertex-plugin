<script setup lang="ts">
import {ref} from 'vue'

/** The panel view: the version that's running, an asset from the plugin's folder, and one of the app's buttons. */
const props = defineProps<{ version: string, logo: string }>()
const clicks = ref(0)
</script>

<template>
    <div class="test-vertex-plugin flex items-center gap-2 p-3 text-sm text-muted">
        <img class="size-4" :src="props.logo" alt="">
        <span data-version>Test plugin {{ props.version }}</span>
        <UButton size="xs" :label="`Clicked ${clicks}`" @click="clicks++"/>
    </div>
</template>
