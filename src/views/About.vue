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

</style>