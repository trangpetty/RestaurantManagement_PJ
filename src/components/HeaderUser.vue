<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="transparent"
    active-text-color="#fff"
  >
    <el-menu-item class="logo-brand">
        <font-awesome-icon icon="fa-solid fa-utensils" class="me-1" />
        Trang Cook
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1"><router-link to="/home-user">HOME</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/about">ABOUT</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/menu">MENU</router-link></el-menu-item>
    <el-menu-item index="4">MENU</el-menu-item>
    <el-sub-menu index="5">
      <template #title><p style="font-size: 20px;">PAGE</p></template>
      <el-menu-item index="5-1">SERVICE</el-menu-item>
      <el-menu-item index="5-2">OUR TEAM</el-menu-item>
      <el-menu-item index="5-3">FEEDBACK</el-menu-item>
      
    </el-sub-menu>
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
      width="30%"
    >
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
  .el-menu {
    padding: 0 48px!important;
  }
  .el-menu li {
      font-size: 1.25rem;
  }
  .el-menu-item {
      transition: all .3s ease;
  }
  .el-menu-item.is-active{
    border-color: #f87582!important;
    background-color: #f87582;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #fff!important;
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
  .el-menu--horizontal {
    height: 100px!important;
  }
  .el-menu--horizontal.el-menu {
    border: none!important;
  }
  .rotate {
  transform: rotate(360deg);
  transition: transform 3s ease-in-out;
  }
  .logo-brand {
    width: 240px!important;
    font-size: 40px!important;
    color: #f87582!important;
    font-weight: bold;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: transparent;
    color: #f87582!important;
  }
  </style>