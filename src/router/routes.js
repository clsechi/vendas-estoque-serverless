
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'categorias/:id', name: 'categories', component: () => import('pages/common/category') },
      { path: 'produtos/:id', name: 'products', component: () => import('pages/common/product') },
    ],
  },
  {
    path: '/checkout',
    component: () => import('layouts/checkout'),
    children: [
      { path: 'cart', name: 'cart', component: () => import('pages/checkout/cart') },
      { path: 'register', name: 'register', component: () => import('pages/checkout/register') },
      { path: 'confirmation', name: 'confirmation', component: () => import('pages/checkout/confirmation') },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/admin'),
    children: [
      { path: 'login', component: () => import('pages/Login') },
      { path: 'products', component: () => import('pages/admin/products/index') },
      { path: 'products/new', name: 'new', component: () => import('pages/admin/products/new') },
      { path: 'products/:id/show', name: 'show', component: () => import('pages/admin/products/show') },
      { path: 'products/:id/edit', name: 'edit', component: () => import('pages/admin/products/edit') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
