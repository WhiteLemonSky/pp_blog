<template>
    <div class="phone-home-item">
        <div class="phone-home-item-img">
            <a href="">
                <img  :src="log_img_srcs"/>
            </a>
        </div>
        <div class="phone-home-item-info">
         <div class="phone-home-item-info-title">
             <a href=""> {{log_title}}</a>
         </div>
         <div class="phone-home-item-info-date">
          <span><svg style="vertical-align: middle ;margin:0 3px" t="1624630174363" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1266" width="1.2rem" height="1.2rem"><path d="M843.65 190.7h-36.45v-9.9c0-34.65-27.9-62.55-62.55-62.55s-62.55 27.9-62.55 62.55v9.9H339.65v-9.9c1.35-33.3-25.2-61.65-58.5-62.55h-4.05c-34.65 0-62.55 27.9-62.55 62.55v9.9h-36c-34.65 0-62.55 27.9-62.55 62.55v593.1c0 34.65 27.9 62.55 62.55 62.55h665.55c34.65 0 62.55-27.9 62.55-62.55V253.25c-0.45-34.65-28.35-62.55-63-62.55zM705.5 180.8c0-19.8 16.2-36 36-36.45 19.8 0 36 16.2 36.45 36.45v108.9c0 19.8-16.2 36-36.45 36.45-19.8 0-36-16.2-36-36.45V180.8m-464.85 0c0-19.8 16.2-36 36-36.45 19.8 0 36 16.2 36.45 36.45v108.9c0 19.8-16.2 36-36.45 36.45-19.8 0-36-16.2-36-36.45V180.8m603 678.6H178.1c-7.2-0.45-12.6-6.3-13.05-13.05V411.2h691.65v434.7c-0.45 7.2-5.85 13.05-13.05 13.5zM257.3 500.3H372.5v55.8H257.3V500.3z m197.55 0h112.05v55.8H454.85V500.3z m198 0h112.05v55.8h-112.05V500.3z m-395.55 112.05H372.5v55.8H257.3v-55.8z m197.55 0h112.05v55.8H454.85v-55.8z m198 0h112.05v55.8h-112.05v-55.8z m-395.55 112.05H372.5v59.4H257.3v-59.4z m197.55 0h112.05v59.4H454.85v-59.4z m198 0h112.05v59.4h-112.05v-59.4z" p-id="1267" fill="#858585"></path></svg></span>
        <span class="article-meta-label">发表于</span>
        <span>{{log_date}}</span>
        </div>
        <div class="phone-home-item-info-content">
            {{log_content}}
             </div>
        </div>
    </div>
</template>
<script>
export default {
   props:{
          log_img_srcs:String,
       log_title:String,
       log_date:String,
       log_content:String,

   }
}
</script>
<style>
.phone-home-item-info{
    width: 90%;
    margin: 10px auto; 
}
.phone-home-item{
    display: flex;
    flex-direction: column;
       width: 90%;
 height: 435.2px;
 box-shadow:7px 7px 5px 3px #999; 
 margin: 0 auto;
 margin-top: 50px;
 border-radius: 25px;
 background: rgb(245,245,245);
   border-radius: 25px;

}
.phone-home-item-img img{
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 230px;
    border: 0;
    object-fit: cover;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}
.phone-home-item-info-title a{
   font-size: 1.2rem;
   text-decoration: none;
   line-height: 1.4;
    padding-top: 30px;
     color: var(--text-highlight-color);
}
.phone-home-item-info-date{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #858585;
    font-size: 80%;
    padding-top: 10px;
    

}
.phone-home-item-info-content{
    width: 100%;
    height: 80px;
    padding-top: 1rem;
        overflow: hidden;
            font-family: STZhongsong,YouYuan;
            line-height:250%
}
</style>