<template>
    <h1>Prendre contact avec nous</h1>

    <form @submit.prevent="checkMessage = true" class="form-contact">
        <input v-model="texteContact" placeholder="Entrez votre texte ici..." required/>
        <button>Prendre contact</button>
    </form>

    <Modal v-if="checkMessage">
        <template #title>Votre message: </template>
        <template #content>{{ texteContact }}</template>
        <template #actions>
            <button 
                @click="contacter"
                style="width: fit-content;"
            >
                Envoyer
            </button>
        </template>
    </Modal>
</template>

<script setup>
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const texteContact = ref('');
const checkMessage = ref(false);
const contacter = () => {
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

    margin-bottom: 1em;

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