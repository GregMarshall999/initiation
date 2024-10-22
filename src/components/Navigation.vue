<template>
    <nav>
        <router-link
            v-for="route in useRouter().getRoutes()" :key="route.name" 
            :to="{ name: route.name }"
        >
            {{ route.name }}
        </router-link>
   </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
</script>