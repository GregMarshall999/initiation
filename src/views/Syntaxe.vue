<template>

</template>

<script>
import { h, ref } from 'vue';


export default {
    setup() {
        const compteur = ref(0);
        const incrementer = () => {
            compteur.value++;
        }

        return () => 
            h('div', { class: 'container' }, [
                h('h1', 'Compeur avec JSX'), 
                h('p', `Compte: ${compteur.value}`), 
                h('button', { onClick: incrementer }, 'Incrémenter')
            ]);
    }
}

</script>