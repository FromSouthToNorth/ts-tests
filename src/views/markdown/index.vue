<template>
  <Markdown  
    @change="handleChange"
    ref="markDownRef" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import Markdown from '@/components/Markdown/index.vue'

  const markDownRef = ref<Nullable<MarkDownActionType>>(null);

  function handleChange(v: string) {
    console.log(v);
  }
</script>
