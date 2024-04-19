<script setup>
import { pageTransition } from '@/components';
</script>

<template>
  <page-transition v-slot="slotProps">
    <router-view v-slot="{ Component }">
      <transition :name="slotProps.transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </page-transition>
</template>

<style scoped lang="less">

</style>
