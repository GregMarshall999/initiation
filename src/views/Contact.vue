<template>
    <h1>Prendre contact avec nous</h1>

    <form @submit.prevent="contacter" class="form-contact">
        <input v-model="texteContact" placeholder="Entrez votre texte ici..."/>
        <button>Prendre contact</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const texteContact = ref('');
const contacter = () => {
    console.log(texteContact.value);

    router.push({ name: 'Home' });
}

</script>

<style>

.form-contact {
    border: 1px solid rgb(86, 145, 117);
    border-radius: 25px;
    background-color: rgb(117, 184, 152);
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
        height: 200px;
    }
    button {
        background-color: rgb(48, 77, 63);
        color: white;
        border: 1px solid rgb(86, 145, 117);
        border-radius: 25px;
        width: 200px;
        align-self:last baseline;
    }
    button:hover {
        cursor: pointer;
        background-color: rgb(117, 184, 152);
        color: black;
    }
}

</style>