<template>
    <div>
        <ServicerNavbar></ServicerNavbar>
        <input v-model="date" type="date" name="date" id="">
        <br>
        <a href="">{{date}}</a>
    </div>
</template>

<script>

import ServicerNavbar from '../../../components/ServicerNavbar.vue'


export default {
    name: 'ServicerHome',
    components: {
    ServicerNavbar
    },
    data() {
        return {
            date: new Date()
        }
    }
}
</script>

<style scoped>

</style>