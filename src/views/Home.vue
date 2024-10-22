<template>
    Bienvenue sur l'acheminement
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';

console.log('setup')

onBeforeMount(() => console.log('beforeMount'))

onMounted(() => console.log('mounted'));

</script>