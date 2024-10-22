<template>
    <div>
        <h2><slot name="title"></slot></h2>
        <p><slot name="content"></slot></p>
        <slot name="actions"></slot>
    </div>
</template>

<style scoped>

div {
    border: 1px solid rgb(86, 145, 117);
    border-radius: 25px;
    background-color: rgb(117, 184, 152);
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        text-decoration: underline;
    }

    p {
        background: rgb(53, 92, 73);
        border-radius: 10px;
        padding: 1em;
    }
}

</style>