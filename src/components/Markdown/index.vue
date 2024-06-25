<template>
  <div ref="wrapRef" class="markdown-container"></div>
</template>
<script lang="ts" setup>
  import Vditor from 'vditor'
  import 'vditor/dist/index.css'
  import { onMountedOrActivated } from "@/hooks/src/onMountedOrActivated";
  import { ref, unref, nextTick } from 'vue'

  defineOptions({ inheritAttrs: false })

  const props = defineProps({
    value: { type: String, default: '' },
  });

  const emit = defineEmits(['change', 'get', 'update:value']);

  const wrapRef = ref(null)
  const vditorRef = ref(null) as Ref<Vditor | null>
  const valueRef = ref(props.value || '');


  function init() {
    const wrapEl = unref(wrapRef);
    if (!wrapEl) return;
    const insEditor = new Vditor(wrapEl, {
      mode: 'sv',
      preview: {
        hljsl: {
          style: 'github',
        },
      },
      fullscreen: {
        index: 520,
      },
      after: () => {
        nextTick(() => {
          vditorRef.value = insEditor
          insEditor.setValue(valueRef.value)
          emit('get', instance)
        });
      },
      blur: () => {
      },
      input: (v) => {
        valueRef.value = v
        emit('update:value', v)
        emit('change', v)
      },
      cache: {
        enable: false,
      },
    });
  }

  const instance = {
    getVditor: (): Vditor => vditorRef.value!,
  };

  onMountedOrActivated(init)
</script>
