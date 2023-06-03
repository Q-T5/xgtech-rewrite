<template>
  <div
    class="h-screen w-full absolute top-0 backdrop-blur-md z-30 backdrop-brightness-50 flex flex-col items-center">
    <div class="w-full p-4 flex justify-end">
      <v-btn
        icon="mdi-close"
        size="small"
        elevation="0"
        @click.stop="closeLoginComp"></v-btn>
    </div>
    <div class="w-[40%] h-fit p-4 rounded-md shadow-sm bg-surface">
      <div class="py-4">
        <h1 class="font-ubuntu text-xl">Login</h1>
      </div>
      <form
        action="#"
        @submit.prevent="loginUser">
        <v-text-field
          v-model="loginDetails.phoneNumber"
          :counter="10"
          label="Phone Number"
          variant="underlined"
          class="font-nunito"
          hint="Format 07..."
          prepend-icon="mdi-phone"
          max-length="10"
          required></v-text-field>
        <v-text-field
          v-model="loginDetails.password"
          :counter="50"
          label="Password"
          variant="underlined"
          class="font-nunito"
          prepend-icon="mdi-lock"
          required></v-text-field>
        <div class="w-full flex justify-center">
          <v-btn
            class="self-center"
            elevation="0"
            variant="outlined"
            type="submit"
            :loading="loginLoading">
            Login
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="js">
import { reactive, ref } from 'vue';

export default {
    name: "LoginComp",
    setup(prop, { emit }) {
        const loginDetails = reactive({
            phoneNumber: "",
            password: ""
        });
        const loginLoading = ref(false);

        function loginUser() {
            loginLoading.value = true;

            setTimeout(() => {
                loginLoading.value = false;
            }, 3000);
        }

        function closeLoginComp() {
            emit("close-login");
        }

        return {
            loginDetails, loginUser, loginLoading, closeLoginComp
        }
    }
}
</script>
