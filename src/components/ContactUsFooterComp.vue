<template>
  <div class="grid grid-cols-2 p-2 border-t-[1px] mt-2 divide-x-1">
    <div class="p-2">
      <h1 class="font-ubuntu text-lg">XGAMERTechnologies</h1>
      <h2 class="font-nunito">PHONE: +254 786 178372 or +254 726 178372</h2>
      <p class="font-nunito max-w-[90%]">
        Visit us today: In Nairobi Town we are located along Moi Avenue, Veteran
        House(Graffins College), 5th Floor - Shop 501
      </p>
    </div>
    <div class="flex flex-col p-2">
      <h1 class="font-ubuntu text-lg">Popular Site Links</h1>
      <a
        v-for="(link, index) in popularSiteLinks"
        :key="index"
        :href="link.link"
        class="font-nunito hover:underline underline-offset-2 text-info"
        >{{ link.text }}</a
      >
    </div>
  </div>
  <div class="flex flex-col items-center space-y-1 p-2">
    <div id="sm-links">
      <a
        v-for="(link, index) in externalLinks"
        :key="index"
        :href="link.link"
        target="_blank"
        class="m-1 text-sm">
        <v-icon :icon="link.icon" />
      </a>
    </div>
    <p class="text-xs font-nunito">
      Copyright &copy; 2023 eXtreme GAMER Technologies for XGAMERTechnologies
      (k) LTD. All rights reserved.
    </p>
  </div>
</template>

<script lang="js">
import { ref } from 'vue';
export default {
  name: "ContactUsFooterComp",
  setup() {
    const externalLinks = [
      {
        link: "https://www.facebook.com/XGAMERtechnologies",
        icon: "mdi-facebook"
      },
      {
        link: "https://twitter.com/XGAMERtech",
        icon: "mdi-twitter"
      },
      {
        link: "https://www.instagram.com/XGAMERtechnologies",
        icon: "mdi-instagram"
      },
      {
        link: "https://www.youtube.com/channel/UCoAju7tANgCZ5-TDRPYUUIw",
        icon: "mdi-youtube"
      },
      {
        link: "intent://send/+254726178372#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end",
        icon: "mdi-whatsapp"
      },
    ];
    const popularSiteLinks = [
      {
        link: "#",
        text: "Customer Reward Scheme"
      },
      {
        link: "#",
        text: "Frequently Asked Questions"
      },
      {
        link: "#",
        text: "Charity work"
      },
      {
        link: "#",
        text: "Careers"
      },
      {
        link: "#",
        text: "Customer Portal"
      },
      {
        link: "#",
        text: "Policy"
      },
    ];

    return {
      externalLinks, popularSiteLinks
    }
  }
}
</script>
