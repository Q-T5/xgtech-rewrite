import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useShoppingCartStore = defineStore('ShoppingCartStore', () => {
  const shoppingCartItems = ref([]);
  const cartTotal = computed(() => {
    return shoppingCartItems.value.length;
  });

  const cartItems = computed(() => {
    return shoppingCartItems.value;
  });

  function addItemToCart(item) {
    shoppingCartItems.value.push(item);
    console.log(
      `Shopping cart now: ${JSON.stringify(shoppingCartItems.value)}`,
    );
    console.log(`Cart total: ${cartTotal.value}`);
  }

  function removeItemFromCart(index) {
    shoppingCartItems.value.splice(index, 1);
  }

  return {
    shoppingCartItems,
    addItemToCart,
    removeItemFromCart,
    cartTotal,
    cartItems,
  };
});

export default useShoppingCartStore;
