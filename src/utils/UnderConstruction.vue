<template>
  <OptionalSlot>
    <div class="flex flex-col items-center h-full py-10">
      <img
        src="../assets/component-under-construction.svg"
        alt="under-construction"
        class="w-24" />
      <h1 class="font-ubuntu text-lg text-center">
        Page Is Still Under Construction. <br />Please Come Back Later
      </h1>
      <v-btn
        elevation="0"
        variant="outlined"
        color="primary"
        rounded="xl"
        @click="router.push({ name: 'HomeView' })"
        class="m-2">
        Go Home
      </v-btn>
    </div>
  </OptionalSlot>
</template>

<script lang="js">
import { useRouter } from 'vue-router';
import OptionalSlot from './OptionalSlot.vue';

export default {
    name: "UnderConstruction",
    components: {
        OptionalSlot
    },
    setup() {
        const router = useRouter();

        return {
            router
        }
    }
}
</script>
