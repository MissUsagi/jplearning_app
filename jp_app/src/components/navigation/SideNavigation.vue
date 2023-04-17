<template>
  <div class="sidebar">
    <h1 class="logo">Logo</h1>
    <div class="nav">
      <ul v-for="element in navElements">
        <li>{{ element }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navElements: ['Lekcje', 'Kanji', 'Gramatyka', 'Słowniczek', 'Zakładki']
    }
  }
}
</script>

<style scoped lang="scss">
li {
  list-style: none;
}
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--side-nav-width);
  height: 100vh;
  border-right: 1px solid var(--c-text-primary);
  padding: 1rem 2rem;
}

.logo {
  text-align: center;
}

.nav ul li {
  cursor: pointer;
  text-transform: capitalize;
  margin: 10px 0;
}
</style>
