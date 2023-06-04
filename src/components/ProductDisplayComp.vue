<template>
  <div
    class="h-fit w-full bg-surface shadow-md rounded-md space-y-2 relative pb-1">
    <img
      :src="props.poster"
      alt="product-image"
      class="h-[12rem] w-full object-cover rounded-t-md shadow-md"
      @load="imageLoadingCallback" />
    <div
      class="h-[12rem] w-full flex justify-center items-center absolute rounded-t-md shadow-md -top-2"
      v-if="imageLoading">
      <v-progress-circular
        indeterminate
        color="primary"></v-progress-circular>
    </div>
    <div class="pl-1 rounded-md space-y-1">
      <h1 class="font-ubuntu text-blue-600 text-xl">{{ props.title }}</h1>
      <h2 class="text-sm font-ubuntu">Publisher: {{ props.publisher }}</h2>
      <h3 class="text-xs font-nunito">Released: {{ props.release }}</h3>
    </div>
    <div class="text-center">
      <v-rating
        v-model="rating"
        hover
        half-increments
        color="yellow"></v-rating>
    </div>
    <div class="h-fit w-full flex justify-center">
      <v-btn
        :ripple="false"
        elevation="0"
        rounded="6"
        append-icon="mdi-basket-plus"
        variant="outlined"
        color="primary">
        Add to Basket
      </v-btn>
    </div>
  </div>
</template>

<script lang="js">
import { ref } from 'vue';

export default {
    name: "ProductDisplayComp",
    props: {
      title: {
        required: true,
        default: "Generic Blog Title",
        type: String
      },
      publisher: {
        required: true,
        default: "EA Sports",
        type: String
      },
      release: {
        required: true,
        default: "21-06-2001",
        type: String
      },
      rating: {
        required: true,
        default: 2.5,
        type: Number
      },
      poster: {
        required: true,
        default: "https://files.fm/thumb_show.php?i=dgrqyep4s",
        type: String
      }
    },
    setup(props) {
      const rating = ref(props.rating);
      const imageLoading = ref(true);

      function  imageLoadingCallback() {
        imageLoading.value = false;
      }

      return {
        rating, imageLoading, imageLoadingCallback, props
      }
    }
}
</script>
