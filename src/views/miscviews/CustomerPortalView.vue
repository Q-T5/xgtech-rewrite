<template>
  <OptionalSlot>
    <h1>Customer Portal</h1>
  </OptionalSlot>
</template>

<script lang="js">
import OptionalSlot from "../../utils/OptionalSlot.vue";
export default {
  name: "CustomerPortalView",
  components: {
    OptionalSlot
  }
}
</script>
