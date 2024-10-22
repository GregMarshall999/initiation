<template></template>

<script lang="jsx">
import { ref } from 'vue';


const MonComposant = (props) => {
    return <div>Salut, je suis un {props.nom}!</div>
}

export default {
    components: {
        MonComposant
    }, 
    setup() {
        const message = ref('Robot');

        return () => (
            <div>
                <MonComposant nom={message.value}/>
            </div>
        )
    }
}

</script>