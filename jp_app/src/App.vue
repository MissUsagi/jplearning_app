<template>
  <the-header />
  <the-sidebar />
  <dashboard-container />
</template>

<script>
import TheSidebar from './components/navigation/TheSidebar.vue'
import TheHeader from './components/navigation/TheHeader.vue'
import DashboardContainer from './components/UI/DashboadContainer.vue'
export default {
  components: { TheSidebar, TheHeader, DashboardContainer }
}
</script>
