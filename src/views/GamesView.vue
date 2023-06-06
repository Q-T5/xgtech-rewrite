<template>
  <OptionalSlot>
    <div
      class="w-full h-screen grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-4 desktops:grid-cols-6 wideDesktop:grid-cols-8 gap-y-3 gap-x-3 px-2">
      <ProductDisplayComp
        v-for="(game, index) in computedGames"
        :key="index"
        :title="game.gameTitle"
        :publisher="game.gamePublisher"
        :release="game.release"
        :rating="game.rating"
        :poster="game.gamePoster"
        :cost="game.gameCost"
        @open-item-selector="preAddToCart(index)" />
    </div>
  </OptionalSlot>
  <div
    class="p-2 w-full fixed h-screen top-0 z-30 backdrop-brightness-50 flex justify-end"
    v-show="itemSelectorOpen">
    <div class="w-[35%] flex flex-col justify-between bg-surface">
      <h1
        class="font-ubuntu text-xl p-2 w-full inline-flex items-center justify-between border-b-[1px]">
        Item Selector
        <v-btn
          variant="text"
          icon="mdi-close"
          size="small"
          @click="itemSelectorOpen = false"></v-btn>
      </h1>
      <div class="h-full p-2">
        <!-- The image source is populated by the cartItem.gameImage variable -->
        <img
          :src="cartItem.gameImage"
          alt="product-cover"
          class="rounded-md object-cover h-56 w-full" />
        <!-- This h1 is populated with the cartItem.gameName variable -->
        <h1 class="font-ubuntu text-lg">{{ cartItem.gameName }}</h1>
        <h2 class="font-ubuntu">Price: {{ cartItem.gameCost }}Ksh</h2>
        <div class="my-2">
          <h1 class="font-ubuntu my-[0.5px]">Quantity</h1>
          <div class="flex items-center justify-between">
            <v-btn
              icon="mdi-plus"
              @click="itemQuantity++"
              size="small"
              color="primary"></v-btn>
            <h1
              class="font-nunito border-b-[1px] w-2/3 text-center px-2 text-lg">
              {{ itemQuantity }}
            </h1>
            <v-btn
              icon="mdi-minus"
              @click="itemQuantity--"
              color="primary"
              size="small"
              :disabled="itemQuantity === 1"></v-btn>
          </div>
        </div>
        <div class="mt-2">
          <p class="text-xs p-1 font-nunito">
            Use this text field to leave a message about your other requirements
            with this product. E.g
            <i>'Wrap it in a gift box. It's for a birthday present'</i>
          </p>
          <v-textarea
            label="Your Custom Message"
            variant="outlined"
            rows="3"
            class="font-nunito"
            v-model="cartItem.customMessage"
            shaped></v-textarea>
        </div>
      </div>
      <v-btn
        variant="outlined"
        rounded="0"
        size="large"
        color="primary"
        append-icon="mdi-cart"
        @click="addToCart"
        >Add To Cart</v-btn
      >
    </div>
  </div>
</template>

<script lang="js">
import { ref, reactive } from 'vue';
import ProductDisplayComp from '../components/ProductDisplayComp.vue';
import OptionalSlot from '../utils/OptionalSlot.vue';
import useShoppingCartStore from '../stores/shoppingcart-store.js'
import useGamesComposable from '../composables/GamesViewCompos.js';

export default {
  name: "GamesView",
	components: {
		ProductDisplayComp, OptionalSlot
	},
  setup() {
    const itemSelectorOpen = ref(false);
    const itemQuantity = ref(1);
    const cartItem = reactive({
      itemQuantity: itemQuantity.value,
      customMessage: "",
      gameName: "",
      gameImage: "",
      gameCost: ""
    });
    const { addItemToCart } = useShoppingCartStore();
    const { computedGames, getGameFromList } = useGamesComposable();

    function preAddToCart(index) {
      // get details of the selected item from the list
      const game = getGameFromList(index);
      cartItem.gameName = game.gameTitle;
      cartItem.gameImage = game.gamePoster;
      cartItem.gameCost = game.gameCost

      // open the item selector
      itemSelectorOpen.value = true
    }

    function addToCart() {
      addItemToCart(cartItem);
      itemSelectorOpen.value = false;
    }

    return {
      itemSelectorOpen, addItemToCart, itemQuantity, cartItem, preAddToCart, computedGames, addToCart
    }
  }
}
</script>
