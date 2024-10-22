<template>
    <nav>
        <router-link to="/">Page Principale</router-link>
        <router-link :to="{ name: 'Contact' }">Nous Contacter</router-link>
    </nav>
</template>