<template>
	<SideNavbarComp />
	<main class="w-4/5">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</main>
</template>

<script>
	import { RouterView } from "vue-router";
	import SideNavbarComp from "./components/SideNavbarComp.vue";

	export default {
		name: "App",
		components: {
			SideNavbarComp,
			RouterView,
		},
		setup() {},
	};
</script>
