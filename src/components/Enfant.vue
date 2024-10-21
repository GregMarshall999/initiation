<template>
    <h2 @click="emits('logMessage', {msg: message, id: 3})">{{ message || 'Aucun message passé' }}</h2>
</template>

<script setup>
const props = defineProps({
    message: String
});

const emits = defineEmits(['logMessage']);
</script>
