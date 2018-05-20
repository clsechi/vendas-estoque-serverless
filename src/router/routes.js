
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: '/login', component: () => import('pages/Login') }
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/admin'),
    children: [
      { path: 'new', component: () => import('pages/product/new') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
