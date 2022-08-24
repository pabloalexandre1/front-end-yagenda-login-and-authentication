<template>
    <div id="service-login">
        <NavbarHome></NavbarHome>
        <div class="container" id="main-body">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8" id="background-login">
                    <div class="logo-area">
                        <img src="../assets/yawlogo.png" alt="" class="img-fluid">
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="division"></div>
                    </div>
                    <h2>Registre-se como um negócio, insira seus dados</h2>
                    <br>
                    <br>
                    <div class="form-area">
                        <label>Nome</label>
                        <input v-model="name" type="text" name="name" placeholder="nome" id="" class=" form-control my-forms">
                        <label>Nome do seu negócio</label>
                        <input v-model="name_business" type="text" name="name_business" placeholder="nome do seu negócio" id="" class=" form-control my-forms">
                        <label for="email">email</label>
                        <input v-model="email" type="email" class="form-control my-forms" name="email" placeholder="Email" id="email-field">
                        <br>
                        <label for="password"> Senha </label>
                        <input v-model="password" type="password" class=" form-control my-forms" name="password" placeholder="Senha" id="password-field">
                        <input v-model="password_confirmation" type="password" class=" form-control my-forms" name="password" placeholder="Confirme Sua Senha" id="password-field">
                        <br>
                        <label for="">Localização</label>
                        <p>Estado</p>
                        <input v-model="address.state" type="text" name="Estado" placeholder="Estado" id="" class="form-control my-forms">
                        <p>Cidade</p>
                        <input v-model="address.city" type="text" name="Cidade" placeholder="Cidade" id="" class="form-control my-forms">
                        <p>Bairro</p>
                        <input v-model="address.district" type="text" name="Bairro" placeholder="Bairro" id="" class="form-control my-forms">
                        <p>Endereço</p>
                        <input v-model="address_description" type="text" name="Endereço" placeholder="Endereço" id="" class="form-control my-forms">
                        <br>
                        
                        <button v-on:click="register" class="btn btn-outline-light" id="service-login-button">Cadastrar</button>
                        
                        <br>
                        <br>
                        <div class="d-flex">
                            <p>Já tem uma conta? </p>
                            <a href="/servicer/login" class="btn btn-outline-light" id="service-login-button">Faça Login</a>
                        </div>
                        <br>
                        <br>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import NavbarHome from '../components/NavbarHome.vue'
import axios from 'axios';

export default {
    name: 'ServicerRegister',
    components: {
    NavbarHome
    },
    data(){
        return {
            name: '',
            name_business: '',
            email: '',
            password: '',
            password_confirmation: '',
            address: {
                state: '',
                city: '',
                district: '',
                address_description: ''
            }
        }
    },
    methods: {
        register: function(){
            if(this.password == this.password_confirmation){
                if(this.name.trim() != ''){
                    if(this.name_business.trim() != ''){
                        if(this.email.trim() != ''){
                            if(this.password.trim() != ''){
                                axios.post('http://localhost:4000/servicer/register', {
                                    name: this.name,
                                    name_business: this.name_business,
                                    email: this.email,
                                    password: this.password,
                                    address: this.address
                                }).then(res => {
                                    if(res.data.msg == "success"){
                                        //this.$router.go('/registered');
                                        alert(res.data.msg);
                                    }
                                    if(res.data.msg == "error"){
                                        alert(res.data.error);
                                    }
                                }).catch(err => {
                                    alert(err);
                                })
                            }else{
                                alert("todos os campos precisam ser preenchidos");
                            }
                        }else{
                            alert("todos os campos precisam ser preenchidos");
                        }
                    }else{
                        alert("todos os campos precisam ser preenchidos");
                    }
                }else{
                    alert("todos os campos precisam ser preenchidos");
                }
                }else{
                    alert("as senhas não abtem");
                }
            
        }
    }
    
}

</script>

<style scoped>

#service-login-button {
    color: #bea562;
    border-color: #bea562;
}

#service-login-button:hover {
    background: #bea562;
    color: #212121;
}

#service-login {
    background-image: url("../assets/bg1.png");
    background-size: cover;
    background-position: center;
}
#main-body {
    padding-top: 100px;
    padding-bottom: 100px;
}

#background-login {
    padding: 20px;
    background-color: #212121d7;
    border-radius: 15px;
   
}

.logo-area {
    margin-left: 40%;
    margin-right: 40%;
}

h2 {
    margin: 20px;
    color: #bea562;
    text-align: center;
}

label {
    color: #bea562;
}

p {
    color: #bea562;
    margin: 10px;
}

.division {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 75px;
    height: 10px;
    border-bottom: 3px solid #bea562;
    align-self: center;
}

.form-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.my-forms {
    width: 300px;
    height: 35px;
}

.my-forms:focus {
    outline: 0;
    box-shadow: 8px 0px 0px #bea562;
   
}
</style>