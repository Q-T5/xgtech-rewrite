<template>
  <OptionalSlot>
    <div class="w-full h-screen grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-4 desktops:grid-cols-6 wideDesktop:grid-cols-8 gap-y-3 gap-x-3 px-4">
      <ProductDisplayComp v-for="a in 12" />
    </div>
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
