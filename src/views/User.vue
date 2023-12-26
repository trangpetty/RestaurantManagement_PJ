<template>
    <div class="home-header page container pb-3">
        <HeaderUser />
        <div class="container py-5 my-5 home-page text-center">
            <h1 class="fs-3 slideInDown animated">User Info</h1>
        </div>
    </div>
    <User />
    <Footer/>
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import Footer from '@/components/Footer.vue';
import User from '@/components/User.vue';
export default {
    components: {HeaderUser, User, Footer}
}

</script>

<style>

</style>