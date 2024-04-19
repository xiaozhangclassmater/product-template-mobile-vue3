

<script lang="js" setup>
import { pageTransition } from '@/components';
</script>

<template>
  <pageTransition v-slot="slotProps">
    <router-view v-slot="{ Component }">
      <transition :name="slotProps.transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </pageTransition>
</template>

<style scoped lang="less"></style>
