<template>
  <div
    class="p-2 w-full fixed h-screen top-0 backdrop-blur z-30 backdrop-brightness-50 flex flex-col items-center">
    <div class="w-[55%] h-[60%] bg-background">
      <TopInfoBarComp title="Cart Checkout" />
      <div class="h-full bg-yellow-500 overflow-y-scroll">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex p-2 rounded-md shadow-md m-1 bg-surface h-fit items-center relative">
          <img
            :src="item.gameImage"
            alt="item-image"
            class="object-cover w-48 rounded-md" />
          <div class="ml-2">
            <h1 class="font-nunito text-xl">Item: {{ item.gameName }}</h1>
            <h3 class="font-nunito text-lg">
              Price Per Unit: {{ item.gameCost }}
            </h3>
            <h3 class="font-nunito text-base">
              Quantity: {{ item.itemQuantity }}
            </h3>
          </div>
          <div class="absolute bottom-2 right-2">
            <v-btn
              icon="mdi-trash-can"
              color="primary"
              variant="outlined"
              size="small"
              elevation="0"
              @click="removeItemFromCart(index)"></v-btn>
          </div>
        </div>
      </div>
      <div class="w-full text-center space-x-2 p-2 bg-red-500">
        <v-btn
          size="large"
          elevation="0"
          append-icon="mdi-arrow-right"
          >Checkout</v-btn
        >
        <v-btn
          size="large"
          elevation="0"
          append-icon="mdi-close"
          variant="outlined"
          @click="
            () => {
              emit('close-checkout');
            }
          "
          >Close for Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script lang="js">
import TopInfoBarComp from './TopInfoBarComp.vue';
import useShoppingCartStore from '../stores/shoppingcart-store';

export default {
    name: "CheckoutComp",
    components: {
        TopInfoBarComp
    },
    setup(props, { emit }) {
        const { cartItems, removeItemFromCart } = useShoppingCartStore();
        return {
            emit, cartItems, removeItemFromCart
        }
    }
}
</script>
