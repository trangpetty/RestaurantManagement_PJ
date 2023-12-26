<template>
    <Header />
    <div class="container" v-loading="loading">
      <h1>List users</h1>
      <div class="d-flex justify-content-between">
        <el-button type="success" plain @click="addModal = true">
          <el-icon><Plus /></el-icon> Add
        </el-button>
        <el-input @keyup="search(value)" v-model="value" placeholder="Please input" style="width: 200px">
          <template #prepend>
            <el-button @click="search(value)"><el-icon><Search /></el-icon></el-button>
          </template>
        </el-input>
      </div>
      <el-table :data="users" style="width: 100%" class="my-2">
        <el-table-column prop="id" label="ID" width="100"/>
        <el-table-column prop="name" label="Name"/>
        <el-table-column prop="email" label="Email"/>
        <el-table-column prop="role" label="Role"/>
        <el-table-column #default="scope" label="Image"> 
          <img :src="scope.row.image" alt="" class="img-user">
        </el-table-column>
        <el-table-column fixed="right" label="Actions">
          <template #default="scope">
            <el-button type="primary" circle @click="getUser(scope.row.id)">
              <el-icon><Edit /></el-icon>
            </el-button>
            <el-button type="danger" circle @click="deleteUser(scope.row.id)">
              <el-icon><Delete /></el-icon>
            </el-button>
          </template>
        </el-table-column>  
      </el-table>
    
      <!-- Update Modal -->
      <el-dialog v-model="updateModal" title="Update user">
        <el-form id="formUpdate" v-model="user">
          <el-form-item>
              <el-input placeholder="Name" v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="Email" v-model="user.email"></el-input>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="Role" v-model="user.role"></el-input>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="Image Path" v-model="user.image"></el-input>
          </el-form-item>
          <el-button type="primary" class="btn-submit" plain @click="updateUser(user.id)">Submit</el-button>
        </el-form>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import axios from 'axios'
  import { ElNotification } from 'element-plus'
  
  export default {
    name: 'Users',
    components: { Header },
    data () {
      return {
        loading: false,
        updateModal: false,
        addModal: false,
        users: [],
        value: '',
        user: {
          name: '',
          email: 0,
          image: ''
        },
      }
    },
    methods: {
      async getUser(id) {
        let result = await axios.get("http://localhost:3000/users/" + id)
        this.user = result.data
        this.updateModal = true
      },
      async updateUser(id) {
        let result = await axios.put("http://localhost:3000/users/" + id, {
            name: this.user.name,
            email: this.user.email,
            role: this.user.role,
            image: this.user.image
        })
        if (result.status == 200) {
            this.updateModal = false
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.loadData()
              ElNotification({
                title: 'Success',
                message: 'Update user successful',
                type: 'success',
                position: 'bottom-right'
              })
            }, 1000);
        }
      },
      async deleteUser(id) {
        let result = await axios.delete("http://localhost:3000/users/" + id)
        if (result.status == 200) {
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.loadData()
              ElNotification({
                title: 'Success',
                message: 'Delete user successful',
                type: 'success',
                position: 'bottom-right'
              })
            }, 1000);
        }
      },
      async loadData() {
        let result = await axios.get("http://localhost:3000/users")
        this.users = result.data;
      },
      async search (value) {
          let result = await axios.get(`http://localhost:3000/users?name=${value}`)
          this.users = result.data;
        if(value == '') {
            this.loadData()
        }
         
      }
    },
    mounted() 
    {
      let user = localStorage.getItem('user-info');
      if(!JSON.parse(user)[0].role) {
        this.$router.push({name: 'SignUp'})
      }
      this.loadData()
      
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 3rem;
  }
  .img-user {
    width: 100px;
    height: auto;
  }
  </style>