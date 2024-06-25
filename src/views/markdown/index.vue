<template>
  <Markdown  
    @change="handleChange"
    :value="value"
    ref="markDownRef" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import Markdown from '@/components/Markdown/index.vue'

  const markDownRef = ref<Nullable<MarkDownActionType>>(null);

  function handleChange(v: string) {
    console.log(v);
  }

  const nums: number[] = [5, 2, 3, 1, 1, 4]

  const value = '```typescript\n'
                 + 'function merge(nums: number[], left: number, mid: number, right: number): void { \n'
                 + '  const tmp = new Array(right - left + 1)\n'
                 + '  let i = left\n'
                 + '  let j = mid + 1\n'
                 + '  let k = 0\n'
                 + '  while (i <= mid && j <= right) {\n'
                 + '    if (nums[i] <= nums[j]) {\n'
                 + '      tmp[k++] = nums[i++]\n'
                 + '    }\n'
                 + '    else {\n'
                 + '      tmp[k++] = nums[j++]\n'
                 + '    }\n'
                 + '  }\n'
                 + '  while (i <= mid) {\n'
                 + '    tmp[k++] = nums[i++]\n'
                 + '  }\n'
                 + '  while (j <= right) {\n'
                 + '    tmp[k++] = nums[j++]\n'
                 + '  }\n'
                 + '  for(k = 0; k < tmp.length; k++) {\n'
                 + '    nums[left + k] = tmp[k]\n'
                 + '  }\n'
                 + '} \n \n'
                 + 'function mergeSort(nums: number[], left: number, right: number): void {\n'
                 + '  if (right <= left) return\n'
                 + '  const mid = Math.floor(left + (right - left) / 2)\n'
                 + '  mergeSort(nums, left, mid)\n'
                 + '  mergeSort(nums, mid + 1, right) \n'
                 + '  merge(nums, left, mid, right)\n'
                 + '} \n'
                 + '``` \n'

  function merge(nums: number[], left: number, mid: number, right: number): void {
    const tmp = new Array(right - left + 1)
    let i = left
    let j = mid + 1
    let k = 0
    while (i <= mid && j <= right) {
      if (nums[i] <= nums[j]) {
        tmp[k++] = nums[i++]
      }
      else {
        tmp[k++] = nums[j++]
      }
    }

    while (i <= mid) {
      tmp[k++] = nums[i++]
    }

    while (j <= right) {
      tmp[k++] = nums[j++]
    }

    for(k = 0; k < tmp.length; k++) {
      console.log(left, k);
      nums[left + k] = tmp[k]
    }
  }

  function mergeSort(nums: number[], left: number, right: number): void {
    if (right <= left) return
    const mid = Math.floor(left + (right - left) / 2)
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right) 
    merge(nums, left, mid, right)
  }
  mergeSort(nums, 0, nums.length - 1)
  console.log(nums);
</script>
