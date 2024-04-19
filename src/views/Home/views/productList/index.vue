<template>
  <div class="product-list-wapper">
    产品页面

    <button @click="toDetails">
      跳转详情
    </button>
  </div>
</template>

<script lang="js" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const toDetails = () => {
    router.push('/Details')
}
</script>

<style scoped lang="less">
.product-list-wapper{
  height: 100vh;
  background-color: #ccc;
}
</style>
