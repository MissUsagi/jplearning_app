<template>
  <div class="sidebar">
    <h1 class="logo">Logo</h1>
    <div class="nav-container">
      <ul v-for="element in sideNavigation">
        <li class="nav-link">
          <a href="#">{{ element }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNavigation: ['Lekcje', 'Kanji', 'Gramatyka', 'Słowniczek', 'Zakładki']
    }
  }
}
</script>

<style scoped lang="scss">
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

.nav-link {
  cursor: pointer;
  text-transform: capitalize;
  margin: 15px 0;
  font-size: 1.2rem;
}
</style>
