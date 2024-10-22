<template></template>

<script lang="jsx">
import { onMounted, ref } from 'vue';

export default {
    setup() {
        const refDiv = ref(null);

        onMounted(() => console.log(refDiv.value));

        return () => <div ref={refDiv}>Une Div</div>
    }
}

</script>