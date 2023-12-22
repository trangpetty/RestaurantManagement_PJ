<template>
    <div class="sign-up" v-loading="loading" icon="el-icon-search" size="small">
        <img src="../assets/logo.png" alt="">
        <h1 class="my-2">Sign Up</h1>
        <el-form>
            <el-form-item>
                <el-input placeholder="Name" v-model="name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="Email" type="email" v-model="email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="Image Path" v-model="image"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="Password" type="password" show-password4 v-model="password"></el-input>
            </el-form-item>
            <el-button type="primary" plain @click="signUp()" class="btn-submit">Sign Up</el-button>
        </el-form>
        <el-text class="mx-1" size="large">Already have an account? <router-link to="/login"><el-link type="primary">Login</el-link></router-link></el-text>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            loading: false,
            name: '',
            email: '',
            password: '',
            image: '',
            role: 0
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password,
                image: this.image,
                role: this.role
            })
            if (result.status == 201) {
                this.loading = true
                setTimeout(() => {
                    this.$router.push({name: 'Home'})
                }, 2000);
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    }
}
</script>

<style scoped>

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
    text-align: center;
}
.el-input {
    height: 60px;
    font-size: 1.25rem!important;
}
.el-input__wrapper {
    padding: 1.5rem!important;
}

</style>