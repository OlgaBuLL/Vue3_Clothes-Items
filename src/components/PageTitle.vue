<template>
  <div class="page-title">
    <h1 class="page-title__title">{{ title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.page-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 768px) {
  .page-title {
    &__title {
      font-size: 22px;
    }
  }
}
</style>
