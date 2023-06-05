<template>
  <TopNavbarComp
    @open-login="displayLogin = true"
    @open-chekout="displayCheckout = true" />
  <main class="relative">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
  <div class="fixed bottom-4 right-4 flex flex-col items-center space-y-2">
    <v-btn
      density="default"
      icon="mdi-chat"
      size="small"></v-btn>
  </div>
  <LoginComp
    v-if="displayLogin"
    @close-login="displayLogin = false" />
  <CheckoutComp
    v-if="displayCheckout"
    @close-checkout="displayCheckout = false" />

  <!-- Teleported components -->
  <teleport to="#notification-zone">
    <NotificationComp v-if="notificationActive" />
  </teleport>
</template>

<style>
html {
  overflow: auto !important;
}
</style>

<script>
import { RouterView } from 'vue-router';
import TopNavbarComp from './components/TopNavbarComp.vue';
import { useTheme } from 'vuetify';
import NotificationComp from './components/NotificationComp.vue';
import useNotificationStore from './stores/notification-store';
import LoginComp from './components/LoginComp.vue';
import { ref } from 'vue';
import CheckoutComp from './components/CheckoutComp.vue';

export default {
  name: 'App',
  components: {
    TopNavbarComp,
    RouterView,
    NotificationComp,
    LoginComp,
    CheckoutComp,
  },
  setup() {
    const theme = useTheme();
    const { notificationActive } = useNotificationStore();
    const displayLogin = ref(false);
    const displayCheckout = ref(false);

    function toggleTheme() {
      if (theme.global.name.value === 'customDark') {
        theme.global.name.value = 'customLight';
      } else if (theme.global.name.value === 'customLight') {
        theme.global.name.value = 'customDark';
      }
    }

    return {
      toggleTheme,
      notificationActive,
      displayLogin,
      displayCheckout,
    };
  },
};
</script>
