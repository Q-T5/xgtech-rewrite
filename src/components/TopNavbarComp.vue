<template>
  <nav
    class="p-2 z-10 bg-surface flex border-b-primary fixed top-0 w-full shadow-sm border-b-[0.5px] items-center justify-between">
    <div class="flex items-center">
      <img
        src="../assets/xgamer-logo.svg"
        alt="app-logo"
        class="w-10 hover:cursor-pointer"
        @click.prevent="router.push({ name: 'HomeView' })" />
      <h1 class="font-alice ml-2">XGAMERTechnologies</h1>
    </div>
    <div class="space-x-0 flex">
      <v-btn
        color="primary"
        @click.stop="drawer = !drawer"
        prepend-icon="mdi-menu"
        variant="outlined"
        elevation="0"
        :ripple="true"
        >Menu</v-btn
      >
      <div class="w-fit h-fit relative">
        <span class="absolute -right-2 -top-1">
          <v-chip>{{ cartTotal }}</v-chip>
        </span>
        <v-btn
          density="default"
          variant="text"
          class="hover:text-primary"
          icon="mdi-cart"
          @click="openCheckout"></v-btn>
      </div>
    </div>
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer">
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
              class="w-16 hover:cursor-pointer" />
          </div>
          <div class="flex flex-col w-full mt-1">
            <router-link
              v-for="(item, index) in navigationItems"
              :key="index"
              :to="{ name: item.linkName }"
              class="p-2 text-center font-nunito hover:underline"
              :class="route.name === item.linkName ? 'bg-primary' : ''">
              {{ item.linkText }}
            </router-link>
            <v-menu location="center">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                  elevation="0"
                  rounded="0"
                  variant="outlined">
                  Other Links
                </v-btn>
              </template>
              <v-list class="flex flex-col">
                <router-link
                  v-for="(item, index) in miscRoutes"
                  :key="index"
                  :to="{ name: item.linkName }"
                  class="p-2 text-center font-nunito hover:underline"
                  :class="route.name === item.linkName ? 'bg-primary' : ''">
                  {{ item.linkText }}
                </router-link>
              </v-list>
            </v-menu>
          </div>
          <template v-slot:append>
            <div class="pa-2">
              <v-btn
                class="w-full"
                elevation="0"
                variant="tonal"
                @click="openLogin"
                >Login</v-btn
              >
            </div>
          </template>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </nav>
</template>

<script lang="js">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useShoppingCartStore from '../stores/shoppingcart-store';
import { storeToRefs } from 'pinia';

export default {
  name: "TopNavbarComp",
  setup(props, { emit }) {
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
    const drawer = ref(false);
    const router =  useRouter();
    const { cartTotal } = storeToRefs(useShoppingCartStore());

    function openLogin() {
      // close the navigation drawer first
      drawer.value = !drawer.value;
      emit("open-login");
    }

    function openCheckout() {
      emit("open-chekout")
    }

    return {
      navigationItems, route, drawer, miscRoutes, router, openLogin, openCheckout, cartTotal
    }
  }
}
</script>
