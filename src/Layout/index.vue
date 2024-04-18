<template>
  <div class="view-wapper">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="js" setup>
</script>

<style scoped lang="less"></style>
