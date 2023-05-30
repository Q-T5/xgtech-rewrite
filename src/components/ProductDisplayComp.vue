<template>
	<div
		class="p-1 w-[22%] shadow-md border-[1px] rounded-md space-y-2">
		<div class="border-[1px] p-1 rounded-md">
			<h1 class="font-ubuntu">Hello World</h1>
			<h2 class="text-sm font-ubuntu">Bungee Studios</h2>
			<h3 class="text-xs font-nunito">21-06-2021</h3>
		</div>
		<div class="flex justify-center">
			<img
				src="https://files.fm/thumb_show.php?i=3vjhz44sx"
				alt="product-image"
				class="h-48 w-28 rounded-md shadow-md" />
		</div>
		<div class="h-fit flex justify-center">
			<v-btn
				:ripple="false"
				elevation="0"
				rounded="6"
                append-icon="mdi-cart-plus">
				Add to Cart
			</v-btn>
		</div>
	</div>
</template>

<script lang="js">
	export default {
	    name: "ProductDisplayComp",
	    setup() {

	    }
	}
</script>
