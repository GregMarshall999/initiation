<template>
    <nav>
        <router-link to="/">Page Principale</router-link>
        <router-link :to="{ name: 'Contact' }">Nous Contacter</router-link>
        <router-link :to="{ name: 'Message', params: { message: 'Test' } }">Tester Message Contact</router-link>
        <router-link v-if="!isConnected" :to="{ name: 'Profil' }" @click="connecter">Se Connecter</router-link>
        <router-link v-else :to="{ name: 'Home' }" @click="deconnecter">Se Déonnecter</router-link>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isConnected = ref(localStorage.connecte && localStorage.connecte === 'true');

const connecter = () => {
    localStorage.connecte = true;
    isConnected.value = true;
};

const deconnecter = () => {
    localStorage.connecte = false;
    isConnected.value = false;
}

</script>