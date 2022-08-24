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
                    <h2>Login como um negócio, insira seus dados</h2>
                    <br>
                    <br>
                    <div class="form-area">
                        <label for="email">email</label>
                        <input v-model="email" type="email" class="form-control my-forms" name="email" placeholder="Email" id="email-field">
                        <br>
                        <label for="password"> Senha </label>
                        <input v-model="password" type="password" class=" form-control my-forms" name="password" placeholder="Senha" id="password-field">
                        <br>
                        
                        <button v-on:click="login" class="btn btn-outline-light" id="service-login-button">Login</button>
                        <a href=""><p style="color: white;">Esqueceu a senha?</p> </a>
                        <br>
                        <br>
                        <div class="d-flex">
                            <p>Ainda não tem uma conta? </p>
                            <a href="/servicer/register" class="btn btn-outline-light" id="service-login-button">Cadastre-se</a>
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
import axios from 'axios'

export default {
    name: 'ServicerLogin',
    components: {
    NavbarHome
},
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function(){
            if(this.email.trim() != ''){
                if(this.password.trim() != ''){
                    axios.post("http://localhost:4000/servicer/login", {
                        email: this.email,
                        password: this.password
                    }).then(res => {
                        if(res.data.msg == 'success'){
                            
                            localStorage.clear();
                            localStorage.setItem('authToken', res.data.user.token);
                            this.$router.push("/servicer/home");
                        }
                        if(res.data.msg == 'error'){
                            alert(res.data.error);
                        }
                    })
                }else{
                    alert("todos campos devem ser preenchidos");
                }
            }else{
                alert("todos os campos devem estar preenchidos");
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