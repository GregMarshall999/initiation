<template>
    <nav>
        <router-link to="/">Page Principale</router-link>
        <router-link :to="{ name: 'Contact' }">Nous Contacter</router-link>
        <router-link :to="{ name: 'Message', params: { message: 'Test' } }">Tester Message Contact</router-link>
    </nav>
</template>