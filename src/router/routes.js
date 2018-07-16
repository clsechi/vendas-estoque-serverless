
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'login', component: () => import('pages/Login') },
    ],
  },

  {
    path: '/admin',
    component: () => import('layouts/admin'),
    children: [
      { path: 'products', component: () => import('pages/product/index') },
      { path: 'products/new', component: () => import('pages/product/new') },
      { path: 'products/:id/show', name: 'show', component: () => import('pages/product/show') },
      { path: 'products/:id/edit', name: 'edit', component: () => import('pages/product/edit') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
