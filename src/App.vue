<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink class="menu-text" to="/">Home</RouterLink>
            <RouterLink class="menu-text" to="/about">Defesas</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<script>

    export default {
        data() {
  return {
    logoUrl: 'https://www.icmc.usp.br/templates/icmc2015/img/logo.png',

  };
}
    };

</script>

<style scoped>
header {
  line-height: 1.5;
  margin-left: 16px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background-color: #1A3C67;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: lightgray;
}

nav a {
  display: inline-block;
  padding: 16px 24px 16px 32px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.menu-text{
  color: white;
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

  nav {
    text-align: left;
    font-size: 1rem;
    margin-right: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
