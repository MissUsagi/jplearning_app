<template>
  <header class="top-nav">
    <div>
      <h3>Cześć Użytkowniku!</h3>
    </div>
    <div><h3>Zaloguj</h3></div>
  </header>
</template>

<style>
.top-nav {
  height: var(--top-nav-height);
  width: calc(100vw - var(--side-nav-width));
  position: absolute;
  left: var(--side-nav-width);
  padding: 0 2rem 0 2rem;
  background: white;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
