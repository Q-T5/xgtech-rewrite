<template>
	<nav class="w-1/5 justify-between flex flex-col h-screen overflow-y-scroll">
		<div class="flex flex-col items-center mt-20">
			<img
				src="../assets/xgamer-logoB.svg"
				alt="app-logo"
				class="w-32" />
			<div class="text-center">
				<h1 class="text-sm font-alice">XGAMERTechnologies</h1>
				<p class="text-sm font-nunito">The Future of All Gaming</p>
			</div>
		</div>
		<div class="flex flex-col items-stretch">
			<router-link
				v-for="(item, index) in navigationItems"
				:key="index"
				:to="{ name: item.linkName }"
				class="p-2 text-center font-nunito"
				:class="route.name === item.linkName ? 'bg-primary' : ''">
				{{ item.linkText }}
			</router-link>
		</div>
		<p class="text-center text-xs font-nunito">
			XGAMERTechnologies &copy; 2023
		</p>
	</nav>
</template>

<script lang="js">
	import { ref } from 'vue';
	   import { useRoute } from 'vue-router';

	   export default {
	       name: "SideNavbarComp",
	       setup() {
	           const navigationItems = ref([
	               { linkText: "Home", linkName: "HomeView"  },
	               { linkText: "Gaming Computers", linkName: "GamingComputersView"  },
	               { linkText: "Games", linkName: "GamesView"  },
	               { linkText: "Products", linkName: "ProductsView"  },
	               { linkText: "Services", linkName: "ServicesView"  },
	               { linkText: "About Us", linkName: "AboutUsView"  },
	               { linkText: "Contact Us", linkName: "ContactView"  },
	           ]);
	           const route = useRoute();

	           return {
	               navigationItems, route
	           }
	       }
	   }
</script>
