
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: 'commercial' },
      { path: 'commercial', component: () => import('pages/List.vue') },
      { path: 'none-commercial', component: () => import('pages/List.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/manager',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      { path: '', redirect: 'index' },
      { path: 'index', component: () => import('pages/m_Index.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
