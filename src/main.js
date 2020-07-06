import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Login from "./components/Login";
import Setting from "./components/Setting";
import User from "./components/User";  
import PageNotFound from "./components/PageNotFound";  

Vue.directive("size" , {
  bind(el, binding){

    if (binding.value == 'small') {
      el.style.fontSize = "20px"
    }else if (binding.value=='big'){
      el.style.fontSize = "150px"
    }else{
      el.style.fontSize = "50px"
    }
  }
})

Vue.use(VueRouter)

const routes = [
  {path: '/' , component:Home},
  {path: '/login', component:Login},
  {path: '/Setting', component:Setting},
  {path: '/user/:id', component:User},
  {path: '*', component: PageNotFound}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
