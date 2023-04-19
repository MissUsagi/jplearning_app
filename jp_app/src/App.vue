<template>
  <primary-header />
  <side-navigation />
  <dashboard-container />
</template>

<script>
import SideNavigation from './components/navigation/SideNavigation.vue'
import PrimaryHeader from './components/navigation/PrimaryHeader.vue'
import DashboardContainer from './components/UI/DashboadContainer.vue'
export default {
  components: { SideNavigation, PrimaryHeader, DashboardContainer }
}
</script>
