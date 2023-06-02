<template>
  <TopInfoBarComp title="Contact Us & Location" />
  <div class="flex justify-center divide-x-2 m-4 rounded-md shadow-md p-2">
    <ContactUsFormComp />
    <div class="w-1/2 p-2">
      <h1 class="font-ubuntu text-lg">Please Note</h1>
      <ul>
        <li
          v-for="(line, index) in noticeLines"
          class="font-nunito p-1">
          <v-icon icon="mdi-circle-small" />{{ line }}
        </li>
      </ul>
    </div>
  </div>
  <div class="m-2 rounded-md shadow-md">
    <h1
      class="p-2 font-ubuntu text-xl border-b-2 border-b-primary bg-background">
      Our Location
    </h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8190479725354!2d36.81958547423298!3d-1.282366235620301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d61dd2512b%3A0xa3713de939fa6a28!2sXGAMER%20technologies!5e0!3m2!1sen!2ske!4v1685524242976!5m2!1sen!2ske"
      style="border: 4"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-full h-[28rem]"></iframe>
  </div>
  <ContactUsFooterComp />
</template>

<script lang="js">
import TopInfoBarComp from '../components/TopInfoBarComp.vue';
import ContactUsFormComp from '../components/ContactUsFormComp.vue';
import ContactUsFooterComp from '../components/ContactUsFooterComp.vue';
import { ref } from 'vue';

export default {
    name: "ContactUsView",
	components: {
		TopInfoBarComp, ContactUsFormComp, ContactUsFooterComp
	},
    setup() {
		const noticeLines = ref([
			"Refer to prices provided on this site.",
			"Clarifications are quick if you call us on +254 786 178372 or +254 726 178372 any day 8 A.M-8 P.M.",
			"We do respond on Whatsapp and SMS as well.",
			"Other means like Facebook, Twitter, Emails, Instagram are also available but may not be quick or accurate as the first 3 means."
		]);

		return {
			noticeLines
		}
    }
}
</script>
