<template>
    <div v-loading="loading" class="row page container px-2 py-5 mx-auto justify-content-center">
        <div class="col-3">
            <img :src="user.image" alt="" class="img-fluid">
        </div>
        <div class="col-6">
            <el-form v-model="user">
                <table class="w-75 mb-1">
                     <tr class="border-bottom"> 
                         <td><h3>Name</h3></td>
                         <td><input type="text" v-model="user.name"></td>
                     </tr>
                     <tr class="border-bottom">
                         <td><h3>Email</h3></td>
                         <td><input type="email" v-model="user.email"></td>
                     </tr>
                     <tr class="border-bottom">
                         <td><h3>Phone</h3></td>
                         <td><input type="text" v-model="user.phone"></td>
                     </tr>
                </table>
            </el-form>
            <button class="btn btn-pink" @click="update(user.id)">Edit</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ElNotification } from 'element-plus'

export default {
    data () {
        return {
            user: {
                name: '',
                email: '',
                image: '',
                phone: '',
                id: 0
            },
            loading: false
        }
    },
    methods: {
        async update(id) {
            let result = await axios.put("http://localhost:3000/users/" + id, {
                name: this.user.name,
                email: this.user.email,
                phone: this.user.phone,
                image: this.user.image,
                password: this.user.password,
                role: this.user.role
            })
            if (result.status == 200) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    localStorage.setItem("user-info", JSON.stringify(result.data))
                    ElNotification({
                        title: 'Success',
                        message: 'Update meal successful',
                        type: 'success',
                        position: 'bottom-right'
                    })
                }, 1000);
            }
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user-info'));
    }
}

</script>

<style scoped>
.border-bottom {
    border-color: #333!important;
}
td {
    border-bottom: 1px solid #ccc;
}
input {
    padding: 1rem;
    border: none;
    font-size: 18px;
    outline: none;
}
</style>