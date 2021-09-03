<template>
    <div class="my-nav">
     <ul>
         <li v-for="n in 5"><a>mytest</a></li>
         
     </ul>

    </div>
</template>
<style scoped>
.my-nav ul{
   position: relative;
   width: 100%;
  z-index: 44;
}
.my-nav ul li{
    float: left;
    margin-left: 20px;
    list-style: none;
}
</style>