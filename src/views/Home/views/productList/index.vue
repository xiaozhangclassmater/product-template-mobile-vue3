<template>
  <div class="product-list-wapper">
    <VanNavBar
      title="理财列表"
      left-text="返回"
      @click-left="leftClickHandle"
    />
    产品页面
    <VanButton @click="toDetails">
      跳转详情
    </VanButton>
  </div>
</template>

<script lang="js" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const leftClickHandle = () => {
    router.back()
}
const toDetails = () => {
    router.push('/Details')
}
</script>

<style scoped lang="less">
.product-list-wapper{
  height: 100vh;
  background-color: #45c97c;
}
</style>
