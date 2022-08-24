<template>
  <div class="home">
    <navbarHome></navbarHome>
    <div class="section1">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>BEM VINDO à YAgenda, seu horário é aqui!</h1>
            <br>
            <p>Cadastre-se como cliente ou negócio para utilizar os serviços, consulte os horários disponíveis e marque no seu
              barbeiro preferido de forma rápida e prática, ou permita que seus clientes possam realizar os agendamentos no seu salão
              do conforto do seu Lar.
            </p>
            <br>
            <div class="d-flex">
              <a href="/login" class="btn" id="main-btn">LOGIN</a>
              <a href="/register" class="btn" id="main-btn">REGISTRAR</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <div class="section2">
      <div class="container">
        <div class="row">
          <div class="col-md-4" style="padding: 50px;">
            <img src="../assets/conforto-verified.png" alt="" class="img-fluid">
          </div>
          <div class="col-md-8 d-flex align-items-center">
            <div>
              <h1 class="h12">PRIORIZE SEU CONFORTO.</h1>
              <br>
              <p class="p2">
                Não pegue filas de espera para ser atendido(a)! Marque seus horários de casa, e vá somente
                na hora marcada.
              </p>
              <a href="/login" class="btn" id="main-btn2">TÔ DENTRO!</a>
              <a href="/register" class="btn" id="main-btn2">QUERO ENTRAR!</a>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import navbarHome from '../components/NavbarHome.vue';

export default {
  name: 'HomeView',
  components: {
    navbarHome
  }
}
</script>

<style scoped>

/* section 1 specifics e some generals */

.section1 {
  background-image: url('../assets/bg1.png');
  background-position: center;
  background-size: cover;
  padding-bottom: 100px;
  padding-top: 100px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 3px solid #bea562;

}
h1 {
  color: white;

}

p {
  color: white;
  text-shadow: 2 2 10;
  background: rgb(21, 21, 21, 0.8);
}

#main-btn {
        color: white;
        background: #212121;
        margin: 10px;
    }

#main-btn:hover {
        color: silver;
}

#main-btn2 {
        color: #212121;
        background: #bea562;
        margin: 10px;
    }

#main-btn2:hover {
        color: silver;
}

/* section 2 specifics */

.section2 {
  background-image: url("../assets/bg2.png");
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 15px;
  padding-right: 15px;
}

.h12 {
  color: #bea562;

}

.p2 {
  color: #bea562;
}
</style>
