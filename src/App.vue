<template>

<form @submit.prevent="addTask">
	<input v-model="nTask" placeholder="Nouvelle Tache" required />
	<button>Ajouter</button>
</form>

<ul>
	<li v-for="t in displayTasks" :key="t.id">
		<input type="checkbox" v-model="t.done"/>
		<span :class="{ done: t.done }">{{ t.text }}</span>
		<button @click="removeTask(t)">X</button>
	</li>
</ul>

<button @click="hideTasks = !hideTasks">
	{{ hideTasks ?  'Afficher taches' : 'Cacher taches' }}
</button>

</template>

<script setup>
import { ref, computed } from "vue";

let id = 0;
const taches = ref([
	{ id: id++, text: 'Faire le lit', done: true }, 
	{ id: id++, text: 'Faire le petit dejeuner', done: true },
	{ id: id++, text: 'Aller au travail', done: false }
]);

const nTask = ref('');
const addTask = () => {
	taches.value.push({ id: id++, text: nTask.value, done: false });
	nTask.value = '';
};

const removeTask = task => {
	taches.value = taches.value.filter(t => t !== task);
};

const hideTasks = ref(false);
const displayTasks = computed(() => {
	return hideTasks.value ? 
		taches.value.filter(t => !t.done) : 
		taches.value;
});
</script>

<style scoped>

span {
	margin-left: 0.5em;
	margin-right: 0.5em;
}

.done {
	text-decoration: line-through;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
