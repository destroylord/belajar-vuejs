<template>
    <div>
        <h1>Fetch use Axios in vue js</h1>
        <h4>Tapai lecak</h4>
            <table border="1px">
                <tr>
                    <td>employee_name</td>
                    <td>employee_salary</td>
                    <td>employee_age</td>

                </tr>
                <tr v-for="item in list" v-bind:key="item.id">
                    <td>{{ item.employee_name }}</td>
                    <td>{{ item.employee_salary }}</td>
                    <td>{{ item.employee_age }}</td>

                </tr>
            </table>
            <div>
                <b-button variant="primary">Primary</b-button>
                <b-button variant="secondary">Secondary</b-button>
                <b-button variant="success">Success</b-button>
                <b-button variant="danger">Danger</b-button>
                <b-button variant="warning">Warning</b-button>
                <b-button variant="info">Info</b-button>
                <b-button variant="light">Light</b-button>
                <b-button variant="dark">Dark</b-button>
            </div>

<div>
  <!-- Using props -->
  <b-input-group size="lg" prepend="$" append=".00">
    <b-form-input></b-form-input>
  </b-input-group>

  <!-- Using slots -->
  <b-input-group class="mt-3">
    <template v-slot:append>
      <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
    </template>
    <b-form-input></b-form-input>
  </b-input-group>

  <!-- Using components -->
  <b-input-group prepend="Username" class="mt-3">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-success">Button</b-button>
      <b-button variant="info">Button</b-button>
    </b-input-group-append>
  </b-input-group>
</div>

    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

export default {
    name : 'EmployeeList',
    data () {
        return{
            list : undefined
        }
    },
    mounted(){
        Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
            this.list = response.data.data
            // console.warn(response.data.data)
        })
    }
}
</script>