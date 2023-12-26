<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  components: {  }
}
</script>

<style>
:root {
    --pink-light: #f87582;
    --bs-gutter-y: 1.5rem;
    --bs-gutter-x: 1.5rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1 {
  font-size: 2.5rem;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  width: 100%;
  margin-right: auto; 
  margin-left: auto;
}
.mt-1 {
  margin-top: 1rem;
}
.my-2 {
  margin: 2rem 0;
}
.mt-3 {
  margin-top: 48px;
}
.mb-05 {
  margin-bottom: 0.5rem;
}
.mx-05 {
  margin: 0 0.25rem!important;
}
.mx-auto {
  margin: 0 auto;
}
.mb-1 {
  margin-bottom: 1.5rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
.me-1 {
  margin-right: 1rem;
}
.px-05 {
  padding: 0 0.5rem;
}
.px-2 {
  padding: 0 24px;
}
.px-1 {
  padding: 0 1rem;
}
.py-1 {
  padding: 1rem 0;
}
.pb-3 {
  padding-bottom: 48px;
}
.pb-05 {
  padding-bottom: 0.5rem;
}
.ps-05 {
  padding-left: 0.5rem;
}
.ps-2 {
  padding-left: 24px;
}
.py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
}
.m-1 {
  margin: 1.5rem!important;
}
.my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
}
.text-white {
  color: #fff!important;
}
.text-light {
  color: #666565!important;
}
.text-center {
  text-align: center!important;
}
.text-start {
  text-align: left!important;
}
.text-end {
  text-align: right!important;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-center {
    justify-content: center !important;
}
.justify-content-between {
  justify-content: space-between;
}
.flex-column {
    flex-direction: column !important;
}
.w-100 {
  width: 100%!important;
}
.w-75 {
  width: 75%!important;
}
.w-50 {
    width: 50%!important;
}
.w-25 {
  width: 25%!important;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.rounded {
    border-radius: 2px !important;
}
.overflow-hidden {
    overflow: hidden !important;
}
.rounded-circle {
    border-radius: 50% !important;
}
.row>* {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
  margin-top: var(--bs-gutter-y);
}
.border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
}
.page {
    width: 1320px;
}
</style>
