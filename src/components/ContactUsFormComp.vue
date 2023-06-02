<template>
  <div class="p-2 w-1/2 rounded-md shadow-md border-[0.5px]">
    <h1 class="font-ubuntu text-lg">Write To Us</h1>
    <v-form>
      <v-text-field
        v-model="contactDetails.email"
        label="Email Address"
        variant="underlined"
        hint="For Example johndoe@gmail.com"
        prepend-icon="mdi-mailbox"
        class="font-nunito"
        required></v-text-field>
      <v-text-field
        v-model="contactDetails.subject"
        :counter="50"
        label="Mail Subject"
        variant="underlined"
        :clearable="true"
        class="font-nunito"
        prepend-icon="mdi-information-outline"
        required></v-text-field>
      <v-text-field
        v-model="contactDetails.phoneNumber"
        :counter="10"
        label="Phone Number"
        variant="underlined"
        hint="Format 07...."
        class="font-nunito"
        prepend-icon="mdi-phone"
        required></v-text-field>
      <v-textarea
        counter
        label="Your Message"
        variant="underlined"
        prepend-icon="mdi-message"
        class="font-nunito"
        :model-value="contactDetails.message"></v-textarea>
      <v-btn
        class="w-full font-nunito"
        append-icon="mdi-send"
        elevation="0"
        >Send Email</v-btn
      >
    </v-form>
  </div>
</template>

<script lang="js">
import { reactive } from 'vue';
export default {
	name: "ContactUsFormComp",
	setup() {
		const contactDetails = reactive({
      email: "",
      subject: "",
      phoneNumber: "",
      message: ""
    });

    return {
      contactDetails
    }
	}
}
</script>
