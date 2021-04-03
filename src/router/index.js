import { createRouter, createWebHashHistory } from "vue-router";
import Suma from "../views/Suma.vue";
import Resta from "../views/Resta.vue";
import Multiplicacion from "../views/Multiplicacion.vue";
import Division from "../views/Division.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "SideMenu",
  //   component: SideMenu,
  //   // children: [
  //   //   // {
  //   //   //   path: "Hola",
  //   //   //   name: "Hola",
  //   //   //   component: Home
  //   //   // }
  //   // ]
  // },

  {
    path: '/suma',
    name: 'Suma',
    component: Suma
  },
  {
    path: '/resta',
    name: 'Resta',
    component: Resta
  },
  {
    path: '/division',
    name: 'Division',
    component: Division
  },
  {
    path: '/multiplicacion',
    name: 'Multiplicacion',
    component: Multiplicacion
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
