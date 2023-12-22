<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#333"
    text-color="#fff"
  >
  <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/users">Users</router-link></el-menu-item>
    <div class="flex-grow" />
    <el-menu-item>
        <img
          :src="avatar"
          class="img-avatar"
        />
        <span>Hello, {{ name }}</span>
      </el-menu-item>
    <el-menu-item @click="open">Logout <el-icon><Right /></el-icon></el-menu-item>
  </el-menu>
  <el-dialog
    v-model="openModal"
    title="Notice"
    width="30%">
    <span>Do you want to log out?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="logout">
          Logout
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            activeIndex: "1",
            avatar: "",
            name: '',
            openModal: false
        }
    },
    methods: {
      open() {
        this.openModal = true
      },
      logout() {
          localStorage.clear()
          this.$router.push({name: 'Login'})
      }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.avatar = JSON.parse(user)[0].image
        this.name = JSON.parse(user)[0].name
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.el-menu li {
    font-size: 1.25rem;
}
.el-menu-item {
    transition: all .3s ease;
}
.el-menu-item:hover,
.el-menu-item.is-active {
    background-color: #fff!important;
    color: #333!important;
}
.flex-grow {
  flex-grow: 1;
}
.img-avatar {
    width: 50px;
    border-radius: 50%;
    height: 50px;
    margin-right: 1rem;
}
.el-menu-item.img-avatar:hover{
    background-color: transparent!important;;
}
</style>