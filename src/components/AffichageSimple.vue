<template>
    <div class="container">
        <slot>Je suis un message par défaut</slot>
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