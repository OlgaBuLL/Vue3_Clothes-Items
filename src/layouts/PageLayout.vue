<template>
  <main class="page main">
    <div class="page__heading">
      <PageTitle :title="title" />
    </div>

    <slot name="content"> </slot>
  </main>
</template>

<script setup>
import PageTitle from "@/components/PageTitle.vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style lang="scss">
.page {
  height: 100%;
  padding: 30px 0;

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 25px;

    .button {
      width: fit-content;
    }
  }
}

@media (max-width: 500px) {
  .page {
    &__heading {
      flex-wrap: wrap;
    }
  }
}
</style>
