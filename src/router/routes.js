
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'login', component: () => import('pages/Login') }
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/admin'),
    children: [
      { path: 'products', component: () => import('pages/product/index') },
      { path: 'product/new', component: () => import('pages/product/new') },
      { path: 'product/:id/show', component: () => import('pages/product/show') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
