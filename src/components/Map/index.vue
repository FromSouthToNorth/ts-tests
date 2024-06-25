<template>
  <div id="map-container" ref="mapContainer"></div>
</template>

<script lang="ts" setup>
  import 'leaflet/dist/leaflet.css'
  import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
  import type { Map } from 'leaflet';
  import { onMounted, ref } from 'vue';

  import { rendererMap } from './src';

  defineOptions({ name: 'Map' });
  const mapContainer = ref(null);
  const map = ref<Map>();

  onMounted(async () => {
    map.value = await rendererMap(mapContainer.value, {
      zoom: 6,
      center: [0, 0],
      minZoom: 3,
      maxZoom: 27,
    });
  });
</script>
