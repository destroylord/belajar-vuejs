<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home data="Dafrin is here" msg="Tapai Lecak"/> -->

    <!-- <DataBind /> -->
    
    <!-- <h2 >{{title}}</h2>
    <Child  v-bind:users="users" v-on:changeTitle="updateTitleText"/> -->
    <!-- <Login/> -->
    <!-- <SignUp /> -->
    <!-- <Validation/> -->
        <!-- <p>{{names}}</p> -->
        <!-- <BeforeCreate/> -->
        <!-- <BeforeMount/> -->
        <!-- <BeforeDestroy/> -->
        <!-- <EmployeeList/> -->
        <!-- <PostComponent/>
        <DeletePost/> -->
        <nav>

          <ul>
            <li>
               <router-link to="/">home </router-link> 
            </li>
            <li>
               <router-link to="/login">Login </router-link> 
            </li>
            <li>
              <router-link to="/setting">Setting </router-link>
            </li>
          </ul>
        </nav>

        <router-view></router-view>
        

        <h2 v-size="'small'">Custom Directive</h2>
        <h2 v-size="'big'">Custom Directive</h2>
        <h2 v-size>Custom Directive</h2>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import DataBind from "./components/DataBind";
// import Child from "./components/Child"
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import Validation from "./components/Validation";
// import  BeforeCreate  from "./components/BeforeCreate";
// import  BeforeMount  from "./components/BeforeMount";
// import BeforeDestroy from "./components/BeforeDestroy";
// import EmployeeList from "./components/EmployeeList"
// import PostComponent from "./components/PostComponent";
// import DeletePost from "./components/DeletePost";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home,
    // DataBind
    // Child
    // Login
    // SignUp
  // Validation
  // BeforeCreate
  // BeforeMount
  // BeforeDestroy
  // EmployeeList
  // PostComponent,
  // DeletePost

},
  data(){
    return {
      names : 'Fahmi Dafrin',

      users : [
        {name : 'fahmi dafrin' , email : 'dafrin@dafrin.com'},
        {name : 'Tapai' , email : 'tapai@tapai.com'},
      ],
      title : "Child to parent Component"
    }
  },
  methods : {
    updateTitleText(title){
      this.title=title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
