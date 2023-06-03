<template>
  <nav
    class="p-2 z-10 bg-surface flex border-b-primary fixed top-0 w-full shadow-sm border-b-[0.5px] items-center justify-around">
    <div class="flex">
      <img
        src="../assets/xgamer-logo.svg"
        alt="app-logo"
        class="w-10 hover:cursor-pointer"
        @click.prevent="router.push({ name: 'HomeView' })" />
      <div>
        <h1 class="text-sm font-alice ml-2">XGAMERTechnologies</h1>
        <p class="text-xs font-nunito ml-2">The Future of All Gaming</p>
      </div>
    </div>
    <div>
      <v-btn
        color="primary"
        @click.stop="drawer = !drawer"
        prepend-icon="mdi-menu"
        variant="outlined"
        elevation="0"
        :ripple="true"
        >Menu</v-btn
      >
      <v-card>
        <v-layout>
          <v-navigation-drawer
            v-model="drawer"
            temporary>
            <div class="flex justify-end">
              <v-btn
                variant="text"
                icon="mdi-close"
                size="small"
                @click.stop="drawer = !drawer"></v-btn>
            </div>
            <div class="flex justify-center">
              <img
                src="../assets/xgamer-logo.svg"
                alt="app-logo"
                class="w-10 hover:cursor-pointer" />
              <div>
                <h1 class="text-sm font-alice ml-2">XGAMERTechnologies</h1>
                <p class="text-xs font-nunito ml-2">The Future of All Gaming</p>
              </div>
            </div>
            <div class="flex flex-col w-full mt-2">
              <router-link
                v-for="(item, index) in navigationItems"
                :key="index"
                :to="{ name: item.linkName }"
                class="p-2 text-center font-nunito"
                :class="route.name === item.linkName ? 'bg-primary' : ''">
                {{ item.linkText }}
              </router-link>
              <v-divider
                :thickness="2"
                color="info"></v-divider>
              <router-link
                v-for="(item, index) in miscRoutes"
                :key="index"
                :to="{ name: item.linkName }"
                class="p-2 text-center font-nunito"
                :class="route.name === item.linkName ? 'bg-primary' : ''">
                {{ item.linkText }}
              </router-link>
            </div>
          </v-navigation-drawer>
        </v-layout>
      </v-card>
    </div>
  </nav>
</template>

<script lang="js">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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

    const miscRoutes =[
      { linkText: "Customer Reward Scheme", linkName: "CustomerRewardScheme" },
      { linkText: "Frequently Asked Questions", linkName: "FAQ" },
      { linkText: "Charity work", linkName: "CharityWork" },
      { linkText: "Careers", linkName: "Careers" },
      { linkText: "Customer Portal", linkName: "CustomerPortal" },
      { linkText: "Policy", linkName: "Policy" },
    ];
    const route = useRoute();
    const drawer = ref(null);
    const router =  useRouter();

    return {
      navigationItems, route, drawer, miscRoutes, router
    }
  }
}
</script>
