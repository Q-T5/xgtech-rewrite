<template>
  <div
    class="p-2 w-full fixed h-screen top-0 backdrop-blur z-30 backdrop-brightness-50 flex justify-end">
    <div class="w-[35%] h-full bg-surface flex flex-col justify-end relative">
      <h1
        class="absolute top-2 right-2 bg-primary p-2 w-fit rounded-full font-nunito text-lg">
        Total: {{ totalCost }}Ksh
      </h1>
      <TopInfoBarComp title="Cart Checkout" />
      <div class="h-full overflow-y-scroll">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex flex-col rounded-md shadow-md m-1 bg-background h-fit relative p-2">
          <div class="flex w-full items-center space-x-2">
            <img
              :src="item.gameImage"
              alt="item-image"
              class="object-cover w-48 rounded-md" />
            <div>
              <h1 class="font-nunito text-lg truncate">
                Item: {{ item.gameName }}
              </h1>
              <h3 class="font-nunito">Price: {{ item.gameCost }}Ksh</h3>
              <h3 class="font-nunito" v-if="false">Quantity: {{ item.itemQuantity }}</h3>
            </div>
          </div>
          <v-expansion-panels
            variant="popout"
            class="my-2"
            v-if="false">
            <v-expansion-panel>
              <v-expansion-panel-title class="font-nunito"
                >Custom Product Message</v-expansion-panel-title
              >
              <v-expansion-panel-text>
                <v-textarea
                  counter
                  label="Any Special Instructions for This Product?"
                  variant="underlined"
                  prepend-icon="mdi-message"
                  class="font-nunito"
                  :model-value="
                    shoppingCartItems[index].customMessage
                  "></v-textarea>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <div class="absolute top-2 right-2 z-20">
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
      <div class="w-full text-center space-x-2 p-2">
        <v-btn
          size="large"
          elevation="1"
          color="primary"
          append-icon="mdi-arrow-right"
          >Checkout</v-btn
        >
        <v-btn
          size="large"
          elevation="0"
          append-icon="mdi-close"
          variant="outlined"
          color="primary"
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
import { storeToRefs } from 'pinia';
import useShoppingCartStore from '../stores/shoppingcart-store';
import TopInfoBarComp from './TopInfoBarComp.vue';

export default {
  name: "CheckoutComp",
  components: {
    TopInfoBarComp
  },
  setup(props, { emit }) {
    const { cartItems, totalCost, shoppingCartItems } = storeToRefs(useShoppingCartStore());
    const { removeItemFromCart } = useShoppingCartStore();
    return {
      emit, cartItems, removeItemFromCart, totalCost, shoppingCartItems
    }
  }
}
</script>
