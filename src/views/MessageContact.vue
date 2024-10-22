<template>
    Le message de contact: <br>
    <p>{{ message }}</p>
</template>

<script setup>

const props = defineProps({
    message: String
});

</script>