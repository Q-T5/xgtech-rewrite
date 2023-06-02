<template>
  <nav class="p-2 z-10 backdrop-blur-lg flex border-b-primary fixed top-0 w-full shadow-md border-b-[0.5px] items-center justify-between">
    <div class="flex">
      <img
        src="../assets/xgamer-logoB.svg"
        alt="app-logo"
        class="w-8" />
      <div>
        <h1 class="text-sm font-alice ml-2">XGAMERTechnologies</h1>
        <p class="text-xs font-nunito ml-2">The Future of All Gaming</p>
      </div>
    </div>
    <div class="">
      <router-link
        v-for="(item, index) in navigationItems"
        :key="index"
        :to="{ name: item.linkName }"
        class="p-2 text-center font-nunito mx-0.5"
        :class="route.name === item.linkName ? 'bg-primary' : ''">
        {{ item.linkText }}
      </router-link>
    </div>
  </nav>
</template>

<script lang="js">
import { ref } from 'vue';
   import { useRoute } from 'vue-router';

   export default {
    name: "TopNavbarComp",
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
