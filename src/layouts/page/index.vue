<template>
  <RouterView>
    <template #default="{ Component, route }">
      <Transition
        name="fade"
        mode="out-in"
        appear>
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </template>
  </RouterView>
</template>
