<template></template>

<script lang="jsx">
import { ref } from 'vue';


export default {
    setup() {
        const show = ref(true);
        const toggle = () => {
            show.value = !show.value;
        }

        return () => (
            <div>
                {show.value ? <p>J'affiche</p> : <p>Je Cache</p>}
                {show.value && <p>Je ne suis la que quand show est vrais</p>}
                <button onClick={toggle}>Click</button>
            </div>
        );
    }
}

</script>