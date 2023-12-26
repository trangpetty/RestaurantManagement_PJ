<template>
  <Header />
  <div class="container" v-loading="loading">
    <h1>List meal</h1>
    <div class="d-flex justify-content-between">
      <el-button type="success" plain @click="addModal = true">
        <el-icon><Plus /></el-icon> Add
      </el-button>
      <el-input v-model="value" placeholder="Please input" style="width: 200px">
        <template #prepend>
          <el-button @click="search(value)"><el-icon><Search /></el-icon></el-button>
        </template>
      </el-input>
    </div>
    <el-table :data="meals" style="width: 100%" class="my-2">
      <el-table-column prop="id" label="ID" width="100"/>
      <el-table-column prop="name" label="Name"/>
      <el-table-column prop="price" label="Price"/>
      <el-table-column #default="scope" label="Image"> 
        <img :src="scope.row.image" alt="" class="img-meal">
      </el-table-column>
      <el-table-column fixed="right" label="Actions">
        <template #default="scope">
          <el-button type="primary" circle @click="getMeal(scope.row.id)">
            <el-icon><Edit /></el-icon>
          </el-button>
          <el-button type="danger" circle @click="deleteMeal(scope.row.id)">
            <el-icon><Delete /></el-icon>
          </el-button>
        </template>
      </el-table-column>  
    </el-table>
    <!-- Add Modal -->
    <el-dialog v-model="addModal" title="Add meal">
      <el-form id="formAdd" v-model="formAdd">
        <el-form-item>
            <el-input placeholder="Name" v-model="formAdd.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="Price" v-model="formAdd.price"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="Image Path" v-model="formAdd.image"></el-input>
        </el-form-item>
        <el-button type="primary" plain @click="addMeal()" class="btn-submit">Add</el-button>
      </el-form>
    </el-dialog>
    <!-- Update Modal -->
    <el-dialog v-model="updateModal" title="Update meal">
      <el-form id="formUpdate" v-model="meal">
        <el-form-item>
            <el-input placeholder="Name" v-model="meal.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="Price" v-model="meal.price"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="Image Path" v-model="meal.image"></el-input>
        </el-form-item>
        <el-button type="primary" class="btn-submit" plain @click="updateMeal(meal.id)">Submit</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'
import { ElNotification } from 'element-plus'

export default {
  name: 'Home',
  components: { Header },
  data () {
    return {
      loading: false,
      updateModal: false,
      addModal: false,
      meals: [],
      value: '',
      formAdd: {
        name: '',
        price: 0,
        image: ''
      },
      meal: {
        name: '',
        price: 0,
        image: ''
      },
    }
  },
  methods: {
    async addMeal() {
      let result = await axios.post("http://localhost:3000/meals", {
          name: this.formAdd.name,
          price: this.formAdd.price,
          image: this.formAdd.image
      })
      if (result.status == 201) {
        this.addModal = false
        this.loading = true
        setTimeout(() => {
          this.loading = false
          formAdd.reset()
          this.loadData()
          ElNotification({
          title: 'Success',
          message: 'Add meal successful',
          type: 'success',
          position: 'bottom-right'
        })
        }, 1000);
      }
    },
    async getMeal(id) {
      let result = await axios.get("http://localhost:3000/meals/" + id)
      this.meal = result.data
      this.updateModal = true
    },
    async updateMeal(id) {
      let result = await axios.put("http://localhost:3000/meals/" + id, {
          name: this.meal.name,
          price: this.meal.price,
          image: this.meal.image
      })
      if (result.status == 200) {
          this.updateModal = false
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.loadData()
            ElNotification({
              title: 'Success',
              message: 'Update meal successful',
              type: 'success',
              position: 'bottom-right'
            })
          }, 1000);
      }
    },
    async deleteMeal(id) {
      let result = await axios.delete("http://localhost:3000/meals/" + id)
      if (result.status == 200) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.loadData()
            ElNotification({
              title: 'Success',
              message: 'Delete meal successful',
              type: 'success',
              position: 'bottom-right'
            })
          }, 1000);
      }
    },
    async loadData() {
      let result = await axios.get("http://localhost:3000/meals")
      this.meals = result.data;
    },
    async search (value) {
      let result = await axios.get(`http://localhost:3000/meals?name=${value}`)
      this.meals = result.data;
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
.img-meal {
  width: 100px;
  height: auto;
}
</style>