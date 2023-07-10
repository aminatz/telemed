const routes = [
  {
    path: "/guest",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      {
        path: "register",
        component: () => import("pages/RegistrationPage.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "patients",
        component: () => import("pages/patients/IndexPage.vue"),
        name: "Patients",
      },
      {
        path: "appointments",
        component: () => import("pages/AppointmentsPage.vue"),
        name: "Appointments",
      },
      {
        path: "chats",
        component: () => import("pages/ChatsPage.vue"),
        name: "Chats",
      },
      {
        path: "consultations",
        component: () => import("pages/ConsultationsPage.vue"),
        name: "Consultations",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
