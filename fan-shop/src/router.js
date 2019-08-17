import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import SignIn from '@/components/authentication/SignIn';
import SignUp from '@/components/authentication/SignUp';
import DetailsGift from '@/components/gifts/DetailsGift';
import CreateGift from '@/components/gifts/CreateGift';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/gift/:id',
      name: 'detailsGift',
      component: DetailsGift
    },
    {
      path: '/create',
      name: 'createGift',
      component: CreateGift
    },
  ]
})