<template>
  <div
    class="p-2 w-full fixed h-screen top-0 backdrop-blur z-30 backdrop-brightness-50 flex flex-col items-center">
    <div
      class="w-[40%] h-fit p-4 rounded-md shadow-sm bg-surface mt-32 relative">
      <img
        src="../assets/account-login.svg"
        alt="login-SVG"
        class="w-24 absolute -top-[3.3rem] left-[40%]" />
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
        <div class="w-full flex justify-center space-x-2">
          <v-btn
            class="self-center"
            elevation="0"
            variant="elevated"
            color="primary"
            type="submit"
            :loading="loginLoading">
            Login
          </v-btn>
          <v-btn
            elevation="0"
            variant="outlined"
            @click.stop="closeLoginComp">
            Cancel
          </v-btn>
        </div>
        <div class="flex justify-center font-nunito mt-2 space-x-2 items-center">
          <h4 class="hover:underline underline-offset-2 hover:cursor-pointer text-blue-500">Forgot Password</h4>
          <span class="text-xl">|</span>
          <h4 class="hover:underline underline-offset-2 hover:cursor-pointer text-blue-500">Have No Account</h4>
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
