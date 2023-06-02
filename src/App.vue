<template>
  <SideNavbarComp />
  <main class="w-4/5 relative h-screen overflow-y-scroll">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
  <div class="fixed bottom-4 right-4 flex flex-col items-center space-y-2">
    <v-btn
      density="default"
      icon="mdi-lightbulb"
      size="x-small"
      @click="toggleTheme"></v-btn>
    <v-btn
      density="default"
      icon="mdi-chat"
      size="small"></v-btn>
    <v-btn
      density="default"
      icon="mdi-cart"></v-btn>
  </div>
</template>

<style>
html {
  overflow: hidden !important;
}
</style>

<script>
import { RouterView } from 'vue-router';
import SideNavbarComp from './components/SideNavbarComp.vue';
import { useTheme } from 'vuetify';

export default {
  name: 'App',
  components: {
    SideNavbarComp,
    RouterView,
  },
  setup() {
    const theme = useTheme();

    function toggleTheme() {
      if (theme.global.name.value === 'customDark') {
        theme.global.name.value = 'customLight';
      } else if (theme.global.name.value === 'customLight') {
        theme.global.name.value = 'customDark';
      }
    }

    return {
      toggleTheme,
    };
  },
};
</script>
