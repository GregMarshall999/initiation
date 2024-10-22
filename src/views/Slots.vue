<template></template>

<script lang="jsx">

const ComponentSlots = (_, { slots }) => {
    return (
        <div>
            <header>{slots.header()}</header>
            <main>{slots.default ? slots.default() : <p>Texte défaut</p>}</main>
            <footer>{slots.footer()}</footer>
        </div>
    )
}

export default {
    components: {
        ComponentSlots
    }, 
    setup() {
        return () => (
            <ComponentSlots>
                {{
                    header: () => <h1>Contenu d'entete</h1>, 
                    default: () => <p>Contenu Pricipal</p>, 
                    footer: () => <p>Contenu pied de page</p>
                }}
            </ComponentSlots>
        )
    }
}

</script>