<template>
  <primary-header />
  <side-navigation />
  <content-container />
</template>

<script>
import SideNavigation from './components/navigation/SideNavigation.vue'
import PrimaryHeader from './components/navigation/PrimaryHeader.vue'
import ContentContainer from './components/UI/ContentContainer.vue'
export default {
  components: { SideNavigation, PrimaryHeader, ContentContainer }
}
</script>
