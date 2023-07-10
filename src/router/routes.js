
const routes = [
  {
    path: '/guest',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegistrationPage.vue') },
    ]
  },
  {
    path: '/:catchALL(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  
  },

]