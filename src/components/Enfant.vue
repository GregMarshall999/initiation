<template>
    <h2 :id="id" :class="color">{{ message || 'Aucun message passé' }}</h2>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    message: String, 
    color: {
        type: String, 
        required: true
    },
    id: String
});

onMounted(() => console.log(props.id));
</script>

<style scoped>

.coloredClass {
    color:red
}

</style>