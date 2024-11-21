<template>
  <svg class="vue-icon">
    <use :xlink:href="`${icon}#${props.name}`"></use>
  </svg>
</template>

<script setup>
import icon from "@/assets/icons/sprite.svg";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style lang="sass">
.vue-icon
  max-width: 24px
  max-height: 24px
</style>
