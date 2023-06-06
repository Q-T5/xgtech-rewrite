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
        @add-to-cart="addToCart(index)" />
    </div>
  </OptionalSlot>
</template>

<script lang="js">
import { ref } from 'vue';
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
    const { addItemToCart } = useShoppingCartStore();
    const { computedGames, getGameFromList } = useGamesComposable();

    function addToCart(index) {
      // get details of the selected item from the list
      const game = getGameFromList(index);

      // create the shopping cart object
      const cartItem = {
        itemQuantity: 1,
        customMessage: "",
        gameName: game.gameTitle,
        gameImage: game.gamePoster,
        gameCost: game.gameCost,
      };

      addItemToCart(cartItem);
    }

    return {
      itemSelectorOpen, computedGames, addToCart,
    }
  }
}
</script>
