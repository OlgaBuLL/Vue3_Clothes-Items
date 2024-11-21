<template>
  <div class="box">
    <Item
      v-for="item in props.totalItems"
      :key="item.id"
      :selectedItems="selectedItems"
      :item="item"
      :invalidItem="props.selectedItems.length >= props.allowedItems"
      @select-item="(selectedItem) => emit('select-item', selectedItem)"
    />
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
  allowedItems: {
    type: Number,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["select-item"]);
</script>

<style lang="scss"></style>
