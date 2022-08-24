import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ServicerLogin from '../views/ServicerLogin.vue'
import ServicerRegister from '../views/ServicerRegister.vue'
import RegisteredPage from '../views/RegisteredPage.vue'
import PaymentTest from '../views/PaymentTest.vue'
import SuccessPay from '../views/SuccessPay.vue'
import CancelPay from '../views/CancelPay.vue'

//import some dependencies to use

import axios from 'axios'
//user logged pages
import LoggedHome from '../views/logged/users/LoggedHome.vue'
import ServicerHome from '../views/logged/servicers/ServicerHome.vue'

//guards

var verifyUser = (to, from, next) => {
  if(localStorage.getItem('authToken') != undefined){
      axios.get("http://localhost:4000/verifytoken/" + localStorage.getItem('authToken')).then(res => {
        if(res.data.role == 'user'){
          console.log('ok');
          next();
        }else{
          next('/');
        }
        
      }).catch(err => {
        alert(err);
        console.log(err);
      });
      
    }else{
      next("/");
    }
}

var verifyServicer = (to, from, next) => {
  if(localStorage.getItem('authToken') != undefined){
      axios.get("http://localhost:4000/verifytoken/" + localStorage.getItem('authToken')).then(res => {
        if(res.data.role == 'servicer'){
          console.log('ok');
          next();
        }else{
          next('/');
        }
        
      }).catch(err => {
        alert(err);
        console.log(err);
      });
      
    }else{
      next("/");
    }
}

var alreadyLogged = (to, from, next) => {
  if(localStorage.getItem('authToken') != undefined){
    axios.get("http://localhost:4000/verifytoken/" + localStorage.getItem('authToken')).then(res => {
      if(res.data.role == 'user'){
        next('/user/home');
      }
      if(res.data.role == 'servicer'){
        next("/servicer/home");
      }
    }).catch(err => {
      alert(err);
      next();
    });
  }else{
    next();
  }
}

//routes definition
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: alreadyLogged
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: alreadyLogged
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    beforeEnter: alreadyLogged
  },
  {
    path: '/servicer/login',
    name: 'servicerLogin',
    component: ServicerLogin,
    beforeEnter: alreadyLogged
  },
  {
    path: '/servicer/register',
    name: 'servicerRegister',
    component: ServicerRegister,
    beforeEnter: alreadyLogged
  },
  {
    path: '/registered',
    name: 'registered',
    component: RegisteredPage,
    beforeEnter: alreadyLogged
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentTest
  },
  {
    path: '/successpay',
    name: 'successpay',
    component: SuccessPay
  },
  {
    path: '/cancelpay',
    name: 'cancelpay',
    component: CancelPay
  }

  //user logged routes
  ,{
    path: '/user/home',
    name: 'userHome',
    component: LoggedHome,
    beforeEnter: verifyUser
  },{
    path: '/servicer/home',
    name: 'servicerHome',
    component: ServicerHome,
    beforeEnter: verifyServicer
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
