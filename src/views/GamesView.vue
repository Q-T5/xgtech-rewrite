<template>
  <OptionalSlot>
    <ProductDisplayComp />
  </OptionalSlot>
</template>

<script lang="js">
import ProductDisplayComp from '../components/ProductDisplayComp.vue';
import OptionalSlot from '../utils/OptionalSlot.vue';

export default {
    name: "GamesView",
	components: {
		ProductDisplayComp, OptionalSlot
	},
    setup() {

    }
}
</script>
