<template>
  <div
    class="item"
    :title="props.title"
    :class="{ invalid: props.invalidItem, selected: chosenItem }"
    :style="{
      borderColor: !props.item.background
        ? 'var(--medium-grey)'
        : 'transparent',
      backgroundColor: props.item.background
        ? props.item.background
        : 'transparent',
      outlineColor:
        chosenItem && props.item.background ? props.item.background : '',
    }"
    @click="selectItem"
    @dblclick="deleteItem"
  >
    <span>{{ item.name }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  selectedItems: {
    type: Array,
    required: false,
    default: () => [],
  },
  item: {
    type: Object,
    required: false,
    default: false,
  },
  invalidItem: {
    type: Boolean,
    required: false,
    default: false,
  },
  selectedItem: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
});

const emit = defineEmits(["select-item", "delete-item"]);

const chosenItem = computed(() => {
  const selected = props.selectedItems.some((itm) => props.item.id === itm.id);

  return selected;
});

const selectItem = () => {
  emit("select-item", props.item);
};

const deleteItem = () => {
  emit("delete-item", props.item);
};
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: var(--border-radius-sm);
  aspect-ratio: 1;
  cursor: pointer;

  span {
    font-size: 12px;
  }

  &.invalid {
    outline: 2px solid var(--medium-grey);
    outline-offset: 3px;
    scale: 0.9;
    background: var(--medium-grey) !important;
    cursor: not-allowed;
  }

  &.selected {
    scale: 0.9;
    outline: 2px solid;
    outline-offset: 3px;
  }
}

@media (max-width: 768px) {
  .item span {
    font-size: 9px;
  }
}
</style>
