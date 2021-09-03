<template>
  <div class="info">
      <span  class="info-item-date">{{info_item_date}}</span>
      <span class="info-item-count">{{info_item_count}}</span>
  </div>
</template>
<script>
export default {
    name:'',
   props:{
       info_item_date:String,
       info_item_count:String,

   }
}
</script>
<style>
.info{
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 5px auto;
}
.info-item-count{
       margin-right: 30px;
}
.info-item-date{
margin-left: 30px;
}

</style>
