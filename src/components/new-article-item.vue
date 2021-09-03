<template>
    <div class="new-article-item">
        <div class="new-article-item-wrap">
        <div class="new-article-item-img">
            <img style="" width="64px" height="40px" :src="new_article_img_src"/>
        </div>
           <div class="new-article-item-title">
      {{new_article_title}}
        </div>
        </div>
        
         <span class="new-article-item-date">{{new_article_date}}</span>
    </div>
</template>
<script>
export default {
   props:{
       new_article_img_src:String,
     new_article_title:String,
     new_article_date:String,

   }
}
</script>
<style>
.new-article-item{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
 margin-left: 1rem;
    margin-top: 5px;
    width: 100%;
    
}
.new-article-item-wrap{
     display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.new-article-item-img{
    width: 40px;
    height: 40pX;

   
}
.new-article-item-title{
 
    width: 100%;
    height: 40px;
    margin:0px 24px -1000px;  
    display: flex;
    flex-wrap: wrap;

}
.new-article-item-title:hover{
      background: #313131;
      color: aliceblue;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
}   
.new-article-item-date{
 color: #858585;
    font-size: 0.6rem;
}

</style>
