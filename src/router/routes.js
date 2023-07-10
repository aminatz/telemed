
const routes = [
  {
    path: '/',
    path: '/guest',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegistrationPage.vue') },
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
      { path: 'patients', component: () => import('pages/PatientsPage.vue') },
      { path: 'appointments', component: () => import('pages/AppointmentsPage.vue') },
      { path: 'chats', component: () => import('pages/ChatsPage.vue') },
      { path: 'consultations', component: () => import('pages/ConsultationsPage.vue') },
    ]
  },

