import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useShoppingCartStore = defineStore('ShoppingCartStore', () => {
  const shoppingCartItems = ref([]);
  const cartTotal = computed(() => {
    return shoppingCartItems.value.length;
  });

  function addItemToCart(item) {
    shoppingCartItems.value.push(item);
  }

  function removeItemFromCart(index) {
    shoppingCartItems.value.splice(index, 1);
  }

  return {
    shoppingCartItems,
    addItemToCart,
    removeItemFromCart,
    cartTotal,
  };
});

export default useShoppingCartStore;
