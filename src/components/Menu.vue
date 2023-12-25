<template>
    <div class="py-5 my-5">
        <div class="text-center fadeInUp animated">
            <h5 class="text-pink section-title mb-05">Food Menu</h5>
            <h1 class="mb-2">Most Popular Items</h1>
        </div>
        <el-tabs>
          <el-tab-pane class="fadeInUp animated">
            <template #label>
              <span class="d-flex align-items-center fadeInUp animated">
                  <font-awesome-icon icon="fa-solid fa-mug-saucer" style="font-size: 2rem;"/>
                  <div class="ps-05">
                      <p>Popular</p>
                      <h3>Breakfast</h3>
                  </div>
              </span>
            </template>
            <div class="row page container">
                <div class="col-6" v-for="item in meals" :key="item.id">
                    <div class="d-flex align-items-center">
                        <img :src="item.image" alt="" class="img-food">
                        <div class="w-100 d-flex flex-column text-start ps-2">
                            <h3 class="d-flex justify-content-between border-bottom mb-05 pb-05">
                                <span>{{ item.name }}</span>
                                <span class="text-pink">{{ item.price }}</span>
                            </h3>
                            <div class="d-flex justify-content-between">
                                <div></div>
                                <el-input-number :min="0" @change="handleChange(this.value)"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              <span class="d-flex align-items-center fadeInUp animated">
                  <font-awesome-icon icon="fa-solid fa-burger" style="font-size: 2rem;"/>            
                  <div class="ps-05">
                      <p>Special</p>
                      <h3>Launch</h3>
                  </div>
              </span>
            </template>
            <div class="row page container fadeInUp animated">
                <div class="col-6" v-for="item in meals" :key="item.id">
                    <div class="d-flex align-items-center">
                        <img :src="item.image" alt="" class="img-food">
                        <div class="w-100 d-flex flex-column text-start ps-2">
                            <h3 class="d-flex justify-content-between border-bottom mb-05 pb-05">
                                <span>{{ item.name }}</span>
                                <span class="text-pink">{{ item.price }}</span>
                            </h3>
                            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                </div>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              <span class="d-flex align-items-center fadeInUp animated">
                  <font-awesome-icon icon="fa-solid fa-utensils" style="font-size: 2rem;"/>            
                  <div class="ps-05">
                      <p>Lovely</p>
                      <h3>Dinner</h3>
                  </div>
              </span>
            </template>
            <div class="row page container fadeInUp animated">
                <div class="col-6" v-for="item in meals" :key="item.id">
                    <div class="d-flex align-items-center">
                        <img :src="item.image" alt="" class="img-food">
                        <div class="w-100 d-flex flex-column text-start ps-2">
                            <h3 class="d-flex justify-content-between border-bottom mb-05 pb-05">
                                <span>{{ item.name }}</span>
                                <span class="text-pink">{{ item.price }}</span>
                            </h3>
                            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                </div>
            </div>
          </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Menu',
    data() {
        return {
            meals: [],
            num: 0
        }
    },
    methods: {
        handleChange (value) {
            console.log(value)
        }
    },
    async mounted() {
        let result = await axios.get("http://localhost:3000/meals")
        this.meals = result.data
    }
}
</script>

<style>
.page {
    width: 1320px;
}
.section-title::before {
    position: absolute;
    content: "";
    width: 45px;
    height: 2px;
    top: 50%;
    left: -55px;
    margin-top: -1px;
    background: var(--pink-light);
}
.el-tabs {
    --el-tabs-header-height: 64px!important;
}
.el-tabs__header {
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
}
.el-tabs__active-bar {
    background-color: var(--pink-light)!important;
}
.el-tabs__item.is-active {
    color: var(--el-text-color-primary)!important;
}
.el-tabs__item.is-active svg,
.el-tabs__item svg {
    color: var(--pink-light)!important;
}
.el-tabs__nav-wrap::after {
    background-color: transparent!important;
}
.img-food {
    width: 80px;
    height: 80px;
}
.el-input-number {
    width: 100px!important;
}
</style>