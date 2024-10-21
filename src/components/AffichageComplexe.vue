<template>
    <div class="container">
        <header>
            <slot name="header">Je suis un titre</slot>
        </header>

        <main>
            <slot>Du texte</slot>
        </main>

        <footer>
            <slot name="footer">Pied de composant</slot>
        </footer>
    </div>
</template>

<style scoped>

.container {
    border: 1px solid rgb(79, 161, 175);
    border-radius: 10px;
    background-color: rgb(130, 206, 206);
    color: rgb(0, 0, 0);
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
}

</style>