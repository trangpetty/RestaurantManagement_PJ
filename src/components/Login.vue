<template>
  <div class="sign-up" v-loading="loading" icon="el-icon-search" size="small">
        <img src="../assets/logo.png" alt="">
        <h1 class="my-2">Login</h1>
        <el-form>
            <el-form-item>
                <el-input placeholder="Email" type="email" v-model="email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="Password" type="password" show-password v-model="password"></el-input>
            </el-form-item>
            <el-button type="primary" plain @click="login()" class="btn-submit">Login</el-button>
        </el-form>
        <el-text class="mx-1" size="large">Not registered? <router-link to="/sign-up"><el-link type="primary">Create an account</el-link></router-link></el-text>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            loading: false,
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if (result.status == 200 && result.data.length > 0) {
                this.loading = true
                setTimeout(() => {
                    if(result.data[0].role == 1) {
                        this.$router.push({name: 'Home'})
                    }
                    else
                        this.$router.push({name: 'Order'})
                }, 2000);
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    } 
}
</script>

<style scoped>
.sign-up {
    text-align: center;
    width: 600px;
    margin: 0 auto;
    padding: 3rem 0;
}
a {
    font-size: 1.25rem!important;
    margin: 1rem auto;
}
.btn-submit {
    width: 100%;
    height: 60px!important;
    font-size: 1.25rem!important;
}
.sign-up {
    width: 600px;
    margin: 0 auto;
    padding: 3rem 0;
}
.el-input {
    height: 60px;
    font-size: 1.25rem!important;
}
.el-input__wrapper {
    padding: 1.5rem!important;
}
</style>