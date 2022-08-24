<template>
    <div>
        <navbarHome></navbarHome>
        <div class="section1">
            <div class="container">
                <section class="h-100 gradient-form">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-white" id="login-section">
                        <div class="row g-0">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                            <div class="card-body p-md-5 mx-md-4">

                                <div class="text-center">
                                <img src="../assets/yawlogo.png"
                                    style="width: 185px;" alt="logo">
                                <h4 class="mt-1 mb-5 pb-1">REALIZE SEU CADASTRO NA YAGENDA.</h4>
                                </div>

                                <form>
                                <p>Insira os dados para registro.</p>
                                <br>

                                <div class="form-outline mb-4">
                                    <input type="text" id="form2Example11" class="form-control"
                                    placeholder="Nome" v-model="name" />
                                    
                                    <label class="form-label" for="form2Example11">Nome</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example11" class="form-control"
                                    placeholder="endereço de email" v-model="email" />
                                    
                                    <label class="form-label" for="form2Example11">Email</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input v-model="password1" type="password" placeholder="senha" id="form2Example22" class="form-control"/>
                                    <input v-model="password2" type="password" placeholder="confinrme sua senha" id="form2Example22" class="form-control"/>
                                    <label class="form-label" for="form2Example22">Senha</label>
                                </div>

                                <div class="text-center pt-1 mb-5 pb-1">
                                    <button v-on:click="register" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" id="btn-2" type="button">Cadastrar</button>
                                    <br>
                                    
                                </div>

                                <div class="d-flex align-items-center justify-content-center pb-4">
                                    <p class="mb-0 me-2">Já tem uma conta?</p>
                                    <a href="/login" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" id="btn-1">Faça login</a>
                                </div>

                                </form>

                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
         
         



        </div>
    </div>
</template>

<script>

import NavbarHome from '../components/NavbarHome.vue'
import axios from 'axios'

export default {
    name: 'RegisterView',
    components: {
    NavbarHome
    
    },
    data(){
        return {
            email: '',
            password1: '',
            password2: '',
            name: '',
        }
    },
    methods: {
        register: function() {
            if(this.email.trim() == '' || this.password1.trim() == '' || this.password2.trim() == '' || this.name.trim() == ''){
                alert('Todos os campos devem ser preenchidos!');
            }else{
                if(this.password1 == this.password2){
                    axios.post('http://localhost:4000/user/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password1
                    }).then(res => {
                        if(res.data.msg == 'error'){
                            alert(res.data.error);
                        }
                        if(res.data.msg == 'success'){
                            alert(res.data.msg);
                        }
                    }).catch(err => {
                        alert(err)
                    })
                }else{
                    alert('as senhas não batem');
                }
            }
        }
    }
}

</script>

<style scoped>

.gradient-custom-2 {
/* fallback for old browsers */
background: #fccb90;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, #212121, #212121, #212121, #212121);

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, #212121, #212121, #212121, #212121);
}

@media (min-width: 768px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 769px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
}
}


/* my full code as owner */

.section1 {
    padding-bottom: 300px;
    background-image: url("../assets/bg-login.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: repeat-y;
    
}

.form-area {
    padding: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #212121;
    border-radius: 10px;
    box-shadow: 0px 0px 11px black;
}

#login-section {
    background: #212121;
}

#btn-1 {
    border-color: #bea562;
}

#btn-2 {
    border-color: #bea562;
}

#form2Example22:focus {
    box-shadow: 6px 0px 0px #bea562;
    border-color: #bea562;
    outline: #bea562;
}

#form2Example11:focus {
    box-shadow: 6px 0px 0px #bea562;
    border-color: #bea562;
    outline: #bea562;
}

#form2Example11 {
    border-color: #bea562;
    outline: #bea562;
}

#form2Example22 {
    border-color: #bea562;
    outline: #bea562;
}

</style>