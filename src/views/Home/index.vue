<template>
  <div class="Home-wapper">
    <VanNavBar title="基金首页" />
    <div>
      Home
    </div>
    <VanButton
      type="default"
      @click="jumpPage"
    >
      跳转
    </VanButton>
  </div>
</template>

<script  setup>
import useStore from '@/store';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
console.log('store' , store.appStore);
const jumpPage = () =>{
    router.push('/Home/productList')
}
</script>

<style scoped lang="less">
.Home-wapper{
  height: 100vh;
  background-color: #ccc;
}
</style>
