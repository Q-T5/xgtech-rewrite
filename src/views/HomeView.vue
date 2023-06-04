<template>
  <div class="h-screen flex flex-col pl-5 justify-center bg-[url('https://files.fm/thumb_show.php?i=k9558qx35')] object-cover">
    <div  class="ml-6">
      <h1 class="text-8xl font-alice">XGAMER</h1>
      <h2 class="text-6xl font-alice">Technologies</h2>
      <p class="mt-5 text-2xl font-nunito">
        The future of all gaming. Home of all video games.
      </p>
    </div>
    <div class="mt-5 ml-6">
      <v-btn
        size="large"
        append-icon="mdi-gamepad-circle"
        variant="outlined"
        @click="router.push({ name: 'GamesView' })"
        color="primary">
        Browse Available Games
      </v-btn>
    </div>
  </div>
</template>

<script lang="js">
import { useRouter } from 'vue-router';

	export default {
		name: "HomeView",
		setup() {
			const router = useRouter();

			return {
				router
			}
		}
	}
</script>
