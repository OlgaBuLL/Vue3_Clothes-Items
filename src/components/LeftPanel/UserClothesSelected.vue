<template>
  <div class="user-clothes-selected box">
    <div
      v-if="props.selectedItems.length"
      class="user-clothes-selected__content"
    >
      <div class="user-clothes-selected__container">
        <Item
          v-for="item in props.selectedItems"
          :key="item.id"
          :item="item"
          title="Dbl click deletes item"
          @delete-item="(selectedItem) => emit('delete-item', selectedItem)"
        />
      </div>

      <p>
        selected
        <span>{{ props.selectedItems.length }}</span>
        /
        <span>{{ props.totalItems.length }}</span>
      </p>
    </div>

    <p v-else class="user-clothes-selected__no-content">
      Add items from the container below
    </p>
  </div>
</template>

<script setup>
import Item from "@/components/Item.vue";

const props = defineProps({
  selectedItems: {
    type: Array,
    required: false,
    default: () => [],
  },
  totalItems: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const emit = defineEmits(["delete-item"]);
</script>

<style lang="scss">
.user-clothes-selected {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__no-content {
    text-align: center;
    color: var(--medium-grey);
  }
}
</style>
