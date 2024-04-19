<template>
  <div class="pageTransition-wapper">
    <slot :transition-name="transitionName" />
  </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const transitionName = ref('')
router.beforeEach((to , from , next) => {
    if(to.meta.pageLevel > from.meta.pageLevel){
        transitionName.value = 'left-trans'
    }else if(to.meta.pageLevel < from.meta.pageLevel){
        transitionName.value = 'right-trans'
    }else{
        transitionName.value = '' // 同级别页面切换不需要动画
    }
    next()
})
</script>

