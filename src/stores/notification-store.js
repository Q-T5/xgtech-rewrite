import { defineStore } from 'pinia';
import { ref } from 'vue';

const useNotificationStore = defineStore('NotificationStore', () => {
  const notificationMessage = ref('Hello World');
  const notificationActive = ref(false);
  const notificationTimeout = ref(null);

  function showNotification(message) {
    notificationMessage.value = message;
    notificationActive.value = true;

    // setting the timeout after which the notification dissapears
    notificationTimeout.value = setTimeout(() => {
      notificationActive.value = false;
    }, 5000);
  }

  function closeNotification() {
    notificationActive.value = false;
    clearInterval(notificationTimeout.value);
  }

  return {
    notificationMessage,
    notificationActive,
    showNotification,
    closeNotification,
  };
});

export default useNotificationStore;
