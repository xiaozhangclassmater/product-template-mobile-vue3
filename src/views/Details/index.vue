<template>
  <div class="Details-wapper">
    Details
    <VanButton @click="backHandle">
      返回
    </VanButton>
  </div>
</template>

<script lang="js" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const backHandle = () => {
    router.push('/')
}
</script>

<style scoped lang="less">
.Details-wapper{
  height: 100vh;
  background-color: #2b84b9;
}
</style>
