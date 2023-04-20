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
  position: fixed;
  top: 0;
  left: 0;
  width: var(--side-nav-width);
  height: 100%;
  border-right: 1px solid #d6d1d1;
  padding: 1rem 2rem;
}

.logo {
  text-align: center;
  margin-bottom: 2rem;
}

.nav ul li {
  cursor: pointer;
  text-transform: capitalize;
  margin: 15px 0;
}

li {
  font-size: 1.2rem;
}
</style>
