<template></template>

<script lang="jsx">
import { ref } from 'vue';


export default {
    setup() {
        const texte = ref('Du texte par défaut');

        return () => (
            <div>
                <input v-model={texte.value} />
                <p>{texte.value}</p>
            </div>
        )
    }
}

</script>