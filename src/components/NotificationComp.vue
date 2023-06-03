<template>
  <div class="flex items-center rounded-md p-1 bg-info">
    <v-icon
      icon="mdi-information-variant-circle-outline"
      class="mr-1" />
    <h1 class="font-nunito">{{ notificationMessage }}</h1>
    <v-tooltip
      text="Close"
      location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-close"
          size="x-small"
          class="ml-1"
          elevation="0"
          @click="closeNotification"></v-btn>
      </template>
    </v-tooltip>
  </div>
</template>

<script lang="js">
import useNotificationStore from "../stores/notification-store.js";
export default {
    name: "NotificationComp",
    setup() {
        const { notificationMessage, notificationActive, closeNotification } = useNotificationStore();

        return {
            notificationMessage, notificationActive, closeNotification
        }
    }
}
</script>
