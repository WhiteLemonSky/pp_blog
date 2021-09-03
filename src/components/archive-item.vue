<template>
  <div class="aritem">
      <span  class="aritem-item-date">{{aritem_item_date}}</span>
      <span class="aritem-item-count">{{aritem_item_count}}</span>
  </div>
</template>
<script>
export default {
    name:'',
   props:{
       aritem_item_date:String,
       aritem_item_count:String,

   }
}
</script>
<style>
.aritem{
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 5px auto;
}
.aritem-item-count{
       margin-right: 30px;
}
.aritem-item-date{
margin-left: 30px;
}
.aritem:hover{
     background: #313131;
      color: aliceblue;
      border-radius: 10px;
}
</style>
