<template>
    <div class="home-header page container pb-3">
        <HeaderUser />
        <div class="container py-5 my-5 home-page text-center">
            <h1 class="fs-3 slideInDown animated">About Us</h1>
        </div>
    </div>
   <About />
   <Team />
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import About from '@/components/About.vue';
import Team from '@/components/Team.vue';
export default {
    components: {HeaderUser, About, Team}
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