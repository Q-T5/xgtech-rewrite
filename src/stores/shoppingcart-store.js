import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useShoppingCartStore = defineStore('ShoppingCartStore', () => {
  const shoppingCartItems = ref([]);
  const cartTotal = ref(0);

  const totalCost = computed(() => {
    let cost = 0;
    shoppingCartItems.value.forEach((cartItem) => {
      cost += cartItem.gameCost * cartItem.itemQuantity;
    });

    return cost;
  });

  const cartItems = computed(() => {
    return shoppingCartItems.value;
  });

  function addItemToCart(item) {
    shoppingCartItems.value.push(item);
    cartTotal.value++;
    console.log(
      `Shopping cart now: ${JSON.stringify(shoppingCartItems.value)}`,
    );
  }

  function removeItemFromCart(index) {
    shoppingCartItems.value.splice(index, 1);
    cartTotal.value--;
  }

  return {
    shoppingCartItems,
    addItemToCart,
    removeItemFromCart,
    cartTotal,
    cartItems,
    totalCost,
  };
});

export default useShoppingCartStore;
