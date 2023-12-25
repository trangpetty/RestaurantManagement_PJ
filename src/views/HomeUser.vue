<template>
    <div class="home-header page container">
        <HeaderUser />
        <div class="d-flex container py-5 my-5 home-page align-items-center">
          <div class="w-50 mt-3">
              <h1 class="fs-3 lh-2 slideInLeft animated">Enjoy Our Delecious Meal</h1>
              <p class="lh-2 mb-2 slideInLeft animated">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <button class="btn btn-pink slideInLeft animated">ORDER A MEAL</button>
          </div>
          <div class="w-50 text-center">
              <img src="../assets/food.png" alt="" class="rotate">
          </div>
        </div>
    </div>
    <div class="container py-5 page">
        <div class="d-flex w-100">
            <div class="col-3 fadeInUp animated delay-01">
                <div class="bg-white box-shadow p-4 card-item">
                    <font-awesome-icon icon="fa-solid fa-user-tie" class="fs-3 mb-1" />
                    <h2>Master Chefs</h2>
                    <p class="text-light">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
            <div class="col-3 fadeInUp animated delay-03">
                <div class="bg-white box-shadow p-4 card-item">
                    <font-awesome-icon icon="fa-solid fa-utensils" class="fs-3 mb-1" />
                    <h2>Quality Food</h2>
                    <p class="text-light">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
            <div class="col-3 fadeInUp animated delay-05">
                <div class="bg-white box-shadow p-4 card-item">
                    <font-awesome-icon icon="fa-solid fa-cart-plus" class="fs-3 mb-1" />  
                    <h2>Online Order</h2>           
                    <p class="text-light">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
            <div class="col-3 fadeInUp animated delay-07">
                <div class="bg-white box-shadow p-4 card-item">
                    <font-awesome-icon icon="fa-solid fa-headphones" class="fs-3 mb-1" />                   
                    <h2>24/7 Service</h2>
                    <p class="text-light">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
        </div>
    </div>
    <About />
    <Menu />
    <Team />
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import About from '@/components/About.vue';
import Menu from '@/components/Menu.vue';
import Team from '@/components/Team.vue';
export default {
    components: {HeaderUser, About, Menu, Team}
}
</script>

<style>
body {
    background-color: #fefefe;
}
h2 {
    margin-bottom: 8px;
}
.text-pink {
    color: #f87582!important;
}
.home-header {
    top: 0;
    position: relative;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(187, 187, 187, 0.9)), url("../assets/background.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.delay-01 {
    animation-delay: 0.1s;
}
.delay-03 {
    animation-delay: 0.3s;
}
.delay-05 {
    animation-delay: 0.5s;
}
.delay-07 {
    animation-delay: 0.7s;
}
.fadeInUp {
    animation-name: fadeInUp;
}
@keyframes fadeInUp {
    0% {
        transform: translate3d(0,100%,0);
        visibility: visible;
    }
    100% {
        opacity: 1;
        transform: none;
    }
}
.zoomIn {
    animation-name: zoomIn;
}
@keyframes zoomIn {
    0% {
    opacity: 0;
    transform: scale3d(.3,.3,.3);
    }
    50% {
        opacity: 1;
    }
}
.slideInDown {
    animation-name: slideInDown;
}
@keyframes slideInDown {
    0% {
        transform: translate3d(0,-100%,0);
        visibility: visible;
    }
    100% {
        transform: translateZ(0);
    }
}
.slideInLeft {
    animation-name: slideInLeft;
}
@keyframes slideInLeft {
    0% {
        transform: translate3d(-100%,0,0);
        visibility: visible;
    }
    100% {
        transform: translateZ(0);
    }
}
.rotate {
    width: 550px;
    height: 550px;
    animation: imgRotate 50s linear infinite;
}
@keyframes imgRotate {
    100% { transform: rotate(360deg) }
}
.home-page {
    width: 960px;
}
.fs-3 {
    font-size: 4rem!important;
}
.fs-2 {
    font-size: 3rem!important;
}
.lh-2 {
    line-height: 1.2;
}
.btn {
    padding: 1rem 3rem;
    border: 1px solid transparent;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 2px;
}
.btn-pink {
    background-color: #f87582;
    color: #fff;
}
.btn-pink:hover {
    background-color: #fa9ea7;
    cursor: pointer;
}
.row {
    display: flex;
    flex-wrap: wrap;
}
.col-3 {
    flex: 0 0 auto;
    width: 25%;
    padding: 0 12px;
}
.col-6 {
    flex: 0 0 auto;
    width: 50%;
}
.bg-white {
    background-color: #fff;
}
.box-shadow {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.p-4 {
    padding: 1.5rem!important;
}
.card-item {
    transition: all .5s ease;
}
.card-item:hover {
    background-color: #f87582;
    color: #fff!important;
}
.card-item:hover svg,
.card-item:hover p {
    color: #fff!important;
}
.card-item svg {
    color: #f87582;
}
</style>