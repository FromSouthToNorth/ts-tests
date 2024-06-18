// 根路由
export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: '/leaflet',
  component: () => import('@/layouts/default/index.vue'),
  meta: {
    title: 'Root',
  },
  children: [
    {
      path: '/leaflet',
      name: 'Leaflet',
      component: () => import('@/views/map/index.vue'),
      meta: {
        title: '地图',
      },
    },
    {
      path: '/markdown',
      name: 'Markdown',
      component: () => import('@/views/markdown/index.vue'),
      meta: {
        title: '文本编辑器',
      },
    }
  ]
};


// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  RootRoute,
];
