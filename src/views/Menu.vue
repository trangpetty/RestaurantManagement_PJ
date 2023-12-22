<template>
    <div class="home-header page container pb-3">
        <HeaderUser />
        <div class="container py-5 my-5 home-page text-center">
            <h1 class="fs-3 slideInDown animated">Food Menu</h1>
        </div>
    </div>
   <Menu />
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import Menu from '@/components/Menu.vue';
export default {
    components: {HeaderUser, Menu}
}

</script>
