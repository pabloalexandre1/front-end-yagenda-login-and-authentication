<template>
    <div>
        <h1>assine o plano para o nosso app versão de negócio.</h1>
        <button v-on:click="buy">Comprar</button>
    </div>
</template>

<script>

import axios from 'axios'

    export default {
        name: 'PaymentTest',
        data() {
            return {
                publish_key: '',
                secret_key: ''
            }
        },
        methods: {
            buy: function(){
                axios.post("http://localhost:4000/servicer/create-checkout").then(res => {
                    window.location.href = res.data.url;
                }).catch(err => {
                console.log(err);
                
                });
            }
        }
    }
</script>

<style scoped>

</style>
