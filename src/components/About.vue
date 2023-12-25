<template>
    <div class="py-5 page container">
        <div class="container row align-items-center">
            <div class="col-6">
                <div class="row">
                    <div class="col-6 mt-1 px-05 text-star zoomIn animated delay-01">
                        <img src="https://themewagon.github.io/restoran/img/about-1.jpg" class="w-100 img-fluid" alt="">
                    </div>
                    <div class="col-6 mt-1 px-05 text-start zoomIn animated delay-03">
                        <img src="https://themewagon.github.io/restoran/img/about-2.jpg" class="w-75 img-fluid" alt="" style="margin-top: 25%;">
                    </div>
                    <div class="col-6 mt-1 px-05 text-end zoomIn animated delay-05">
                        <img src="https://themewagon.github.io/restoran/img/about-3.jpg" class="w-75 img-fluid" alt="">
                    </div>
                    <div class="col-6 mt-1 px-05 text-end zoomIn animated delay-07">
                        <img src="https://themewagon.github.io/restoran/img/about-4.jpg" class="w-100 img-fluid" alt="">
                    </div>
                </div>
            </div>
            <div class="col-6 mt-3 px-2">
                <h5 class="section-title text-pink mb-05">About Us</h5>
                <h1 class="mb-1">Welcome to <font-awesome-icon icon="fa-solid fa-utensils" class="text-pink"/> Restoran</h1>
                <p class="mb-1">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p class="mb-1">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div class="row mb-1">
                    <div class="col-6">
                        <div class="d-flex align-items-center border-start-pink px-1">
                            <h1 class="text-pink fs-2">15</h1>
                            <div class="ps-2">
                                <p>Years of</p>
                                <h4>EXPERIENCE</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center border-start-pink px-1">
                            <h1 class="text-pink fs-2">50</h1>
                            <div class="ps-2">
                                <p>Popular</p>
                                <h4>MASTER CHEFS</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="mt-1 btn btn-pink">READ MORE</button>
            </div>
        </div>

    </div>
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
export default {
    components: {HeaderUser}
}

</script>

<style>
@font-face {
    font-family: 'Pacifico', cursive;
    src: url('https://fonts.googleapis.com/css?family=Pacifico');
}
.border-start-pink {
    border-left: 5px solid #f87582;
}
.section-title {
    position: relative;
    display: inline-block;
    font-family: 'Pacifico', cursive;
    font-size: 1.25rem;
    font-weight: 500;
}
.section-title::after {
    position: absolute;
    content: "";
    width: 45px;
    height: 2px;
    top: 50%;
    right: -55px;
    margin-top: -1px;
    background: var(--pink-light);
}
</style>