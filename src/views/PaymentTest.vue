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
                publish_key: 'pk_live_51LSSIPGHronIDZ9wa4sV02CTKE48uBcqZ8iPzs3rhZGT4tUi2ZPV4FfPiJunmgKyJr3evWv2DzJ1ZOUe21DGmB1F00hMD1BxBM',
                secret_key: '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'
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