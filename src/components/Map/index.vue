<template>
  <div id="map-container" ref="mapContainer"></div>
</template>

<script lang="ts" setup>
  import type { Map } from 'leaflet';
  import { onMounted, ref } from 'vue';

  import { rendererMap } from './src';

  defineOptions({ name: 'Map' });
  const mapContainer = ref(null);
  const map = ref<Map>();

  onMounted(async () => {
    map.value = rendererMap(mapContainer.value, {
      zoom: 6,
      center: [0, 0],
      minZoom: 3,
      maxZoom: 27,
    });
  });

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
  const nums: number[] = [5, 2, 3, 1, 1, 4]
  mergeSort(nums, 0, nums.length - 1)
  console.log(nums);
</script>
