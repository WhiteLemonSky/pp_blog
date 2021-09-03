<template>
  <div class="container">
    <div class="login-panel">
         <h1>login</h1>
         <ppbutton type="danger">nns</ppbutton>
    </div>
 
  </div>
</template>
<style>
@import '../assets/css/login.css';


</style>
<script>
import ppbutton from '../components/button.vue';

export default {
    name:'login',
  components:{
   ppbutton,
 
  },

methods: {
   
    //请求方法
    // login(){
    //     this.$http({
    //         method:'post',
    //         url:'地址'，
    //         data:{

    //         }
    //     }).then(res=>{
    //     console.log(res);
    //     let{code}=res.data;
    //     if(code=='200'){
        // sessionStorage.setItem('userName',name);
    //         this.$routerrouter.push('./home/home.vue')
    //     }
    // })
    // }
},

}
</script>