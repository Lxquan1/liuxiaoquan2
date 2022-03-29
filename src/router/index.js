import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Shouye from '../views/homes/HomeIndex.vue'
import Shouye2 from '../views/Shouye.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {
        path: "/shou",
        name: "shou",
        component: Shouye,
      },
      {
        path: "/shouye2",
        name: "hoShouye2me",
        component: Shouye2,
      },
    ]
  },
 
  
];

const router = new VueRouter({
  routes,
});


export default router;
