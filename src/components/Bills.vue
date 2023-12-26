<template>
    <Header />
    <div class="container p-4">
        <h1>List bills</h1>
        <el-table :data="bills" style="width: 100%" class="my-2">
            <el-table-column prop="id" label="ID" width="100"/>
            <el-table-column prop="date_time" label="Time"/>
            <el-table-column prop="cost" label="Cost"/>
            <el-table-column fixed="right" label="Actions">
              <template #default="scope">
                <el-button type="primary" circle @click="getBill(scope.row.id)">
                    <el-icon><More /></el-icon>
                </el-button>
                <el-button type="danger" circle @click="deleteBill(scope.row.id)">
                  <el-icon><Delete /></el-icon>
                </el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-dialog v-model="detailModal" title="Detail Bill">
            <el-table :data="bill" height="250" style="width: 100%">
                <el-table-column prop="meal" label="Meal" width="180" />
                <el-table-column prop="quantity" label="Quantity" width="180" />
                <el-table-column prop="cost" label="Cost" />
            </el-table>
        </el-dialog>            
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'
import { ElNotification } from 'element-plus'

export default {
    name: 'Users',
    components: { Header },
    data () {
      return {
        loading: false,
        detailModal: false,
        bills: [],
        bill: {
            meal: '',
            cost: 0,
            quantity: 0,
            bill_id: 0
        }
      }
    },
    mounted () {
        let user = localStorage.getItem('user-info');
        if(!JSON.parse(user)[0].role) {
        this.$router.push({name: 'SignUp'})
        }
        this.loadData()
    },
    methods: {
        async loadData() {
            let result = await axios.get("http://localhost:3000/bills")
            this.bills = result.data;
        },
        async getBill(id) {
            let result = await axios.get(`http://localhost:3000/bill_details?bill_id=${id}`)
            this.bill = result.data
            this.detailModal = true
        },
        async deleteBill(id) {
            let result = await axios.delete("http://localhost:3000/bills/" + id)
            if (result.status == 200) {
                this.loading = true
                setTimeout(() => {
                this.loading = false
                this.loadData()
                ElNotification({
                    title: 'Success',
                    message: 'Delete user successful',
                    type: 'success',
                    position: 'bottom-right'
                })
                }, 1000);
            }
        }
    }
}
</script>

<style>

</style>