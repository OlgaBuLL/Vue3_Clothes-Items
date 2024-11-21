<template>
  <header class="header">
    <RouterLink to="/" class="header__link">
      <BaseIcon name="logo" class="header__logo" />
    </RouterLink>

    <nav class="header__menu">
      <RouterLink to="/" class="header__link">Clothes</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  &__logo {
    max-width: 35px;
    max-height: 35px;
    fill: var(--color-text);
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__link {
    color: var(--color-text);

    &:hover {
      color: var(--secondary);
    }
  }
}
</style>
