<template>
  <PageLayout title="Clothes" class="clothes">
    <template #content>
      <div class="clothes__content">
        <UserClothesSelected
          class="clothes__selected left"
          :selectedItems="clothesStore.selectedClothesLeft"
          :totalItems="clothesStore.blockLeft"
          @delete-item="
            (item) =>
              deleteItem({
                item,
                selectedItemsArray: clothesStore.selectedClothesLeft,
              })
          "
        />
        <UserClothes
          :selectedItems="clothesStore.selectedClothesLeft"
          :totalItems="clothesStore.blockLeft"
          :allowedItems="6"
          class="clothes__total left"
          @select-item="
            (item) =>
              selectItem({
                item,
                selectedItemsArray: clothesStore.selectedClothesLeft,
                allowedItems: 6,
              })
          "
        />
        <UserClothesSelected
          class="clothes__selected right"
          :selectedItems="clothesStore.selectedClothesRight"
          :totalItems="clothesStore.blockRight"
          @delete-item="
            (item) =>
              deleteItem({
                item,
                selectedItemsArray: clothesStore.selectedClothesRight,
              })
          "
        />
        <UserClothes
          class="clothes__total right"
          :selectedItems="clothesStore.selectedClothesRight"
          :totalItems="clothesStore.blockRight"
          :allowedItems="1"
          @select-item="
            (item) =>
              selectItem({
                item,
                selectedItemsArray: clothesStore.selectedClothesRight,
                allowedItems: 1,
              })
          "
        />
      </div>
    </template>
  </PageLayout>
</template>

<script setup>
import { useClothesStore } from "@/stores/clothes";
import { useClothes } from "@/composables/useClothes";
import PageLayout from "@/layouts/PageLayout.vue";
import UserClothes from "@/components/LeftPanel/UserClothes.vue";
import UserClothesSelected from "@/components/LeftPanel/UserClothesSelected.vue";

const { selectItem, deleteItem } = useClothes();

const clothesStore = useClothesStore();
</script>

<style lang="scss">
.clothes {
  &__content {
    display: grid;
    grid-template-areas: "selected-left selected-right" "total-left total-right";
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  &__selected {
    &.left {
      grid-area: selected-left;
    }

    &.right {
      grid-area: selected-right;
    }
  }

  &__total {
    &.left {
      grid-area: total-left;
    }

    &.right {
      grid-area: total-right;
    }
  }
}

@media (max-width: 768px) {
  .clothes {
    &__content {
      gap: 15px;
    }
  }
}
</style>
