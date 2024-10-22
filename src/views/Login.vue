<template>
    <button @click="connexion">Connectez vous</button>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
const connexion = () => {
    localStorage.connecte = true;
    router.push({ name: 'Profil' });
};
</script>