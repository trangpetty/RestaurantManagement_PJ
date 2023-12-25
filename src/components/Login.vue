<template>
    <transition name="slide-fade">
        <div class="sign-up" v-if="!show" v-loading="loading" icon="el-icon-search" size="small">
            <img src="../assets/logo.png" alt="">
            <h1 class="my-2">Login</h1>
            <el-form class="text-end">
                <el-form-item>
                    <el-input placeholder="Email" type="email" v-model="email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="Password" type="password" show-password v-model="password"></el-input>
                </el-form-item>
                <div class="text-start">
                    <el-text type="danger" size="large">{{ text_err1 }}</el-text>
                </div>
                <el-link type="primary" @click="show = !show">Forgot password</el-link>
                <el-button type="primary" plain @click="login()" class="btn-submit">Login</el-button>
            </el-form>
            <el-text class="mx-1" size="large">Not registered? <router-link to="/sign-up"><el-link type="primary">Create an account</el-link></router-link></el-text>
        </div>
    </transition>
    <transition name="slide-fade">
        <div class="sign-up" v-loading="loading" size="small" v-if="show">
            <div class="text-start">
                <el-icon @click="show = !show" style="cursor: pointer;"><ArrowLeftBold /></el-icon>
            </div>
            <img src="../assets/logo.png" alt="">
            <h1 class="my-2">Forgot Password</h1>
            <el-form class="text-start">
                <el-form-item>
                    <el-input placeholder="Email" type="email" v-model="email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="Password" type="password" show-password v-model="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="Confirm Password" type="password" show-password v-model="password_confirm"></el-input>
                </el-form-item>
                <el-text type="danger" size="large">{{ text_err }}</el-text>
                <el-button type="primary" plain @click="reset()" class="btn-submit mt-1">Reset</el-button>
            </el-form>
            <el-text size="large">Not registered? <router-link to="/sign-up"><el-link type="primary">Create an account</el-link></router-link></el-text>
        </div>
    </transition>
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
            password_confirm: '',
            text_err: '',
            text_err1: '',
            show: false
        }
    },
    methods: {
        async login() {
            if (this.email == '' || this.password == '') {
                this.text_err1 = 'Email and Password are required!'
            }
            else {
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
                if (result.status == 200 && result.data.length > 0) {
                    this.loading = true
                    setTimeout(() => {
                        if(result.data[0].role == 1) {
                            this.$router.push({name: 'Home'})
                        }
                        else
                            this.$router.push({name: 'HomeUser'})
                    }, 1000);
                    localStorage.setItem("user-info", JSON.stringify(result.data))
                }
                else {
                    this.text_err1 = 'Email or password is incorrect!'
                }
            }
        },
        async reset() {
            if (this.password != this.password_confirm) {
                this.text_err = "Your password and confirmation password do not match."
            }
            else {
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}`)
                if (result.status == 200) {
                    let id = result.data[0].id
                    let name = result.data[0].name
                    let email = result.data[0].id
                    let image = result.data[0].image
                    let role = result.data[0].role
                    let update = await axios.put("http://localhost:3000/users/" + id, {
                        name: name,
                        email: email,
                        password: this.password,
                        image: image,
                        role: role
                    })
                    if (update.status == 200) {
                        this.loading = true
                        setTimeout(() => {
                            this.loading = false
                            if(role == 1) {
                                this.$router.push({name: 'Home'})
                            }
                            else
                                this.$router.push({name: 'HomeUser'})
                        }, 1000);
                        localStorage.setItem("user-info", JSON.stringify(update.data))
                    }
                }
                else {
                    this.text_err = 'Email is invalid'
                }
               
            }
        }
    } 
}
</script>

<style scoped>
.slide-fade-enter-active {
transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from{
transform: translateX(20%);
visibility: hidden;
}
.slide-fade-leave-to {
display: none;
}
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