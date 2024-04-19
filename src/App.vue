<script setup>
import { pageTransition } from '@/components';
</script>

<template>
  <page-transition v-slot="{ transitionName }">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </page-transition>
</template>

<style scoped lang="less">

</style>
