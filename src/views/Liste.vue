<template></template>

<script lang="jsx">

export default {
    setup() {
        const fruits = ['Pomme', 'Poire', 'Abricot'];

        return () => (
            <ul>
                {fruits.map((f, index) => (
                    <li key={f}>{f} {index}</li>
                ))}
            </ul>
        );
    }
}

</script>