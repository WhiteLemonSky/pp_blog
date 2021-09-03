<template>
  <div class="content-left-item2">
       <div class="content-left-item2-img">
    <img class="log-img2" :src="log_img_srcs">
  </div>
    <div class=".content-left-item2-info">
      <div class="content-left-item2-info-div">
        <h1 class="atrtcle-title">{{ log_title }}</h1>
        <div class="article-meta-wrap">
          <span
            ><svg
              style="vertical-align: middle; margin: 0 3px"
              t="1624630174363"
              class="icon"
              viewBox="0 0 1026 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1266"
              width="1.2rem"
              height="1.2rem"
            >
              <path
                d="M843.65 190.7h-36.45v-9.9c0-34.65-27.9-62.55-62.55-62.55s-62.55 27.9-62.55 62.55v9.9H339.65v-9.9c1.35-33.3-25.2-61.65-58.5-62.55h-4.05c-34.65 0-62.55 27.9-62.55 62.55v9.9h-36c-34.65 0-62.55 27.9-62.55 62.55v593.1c0 34.65 27.9 62.55 62.55 62.55h665.55c34.65 0 62.55-27.9 62.55-62.55V253.25c-0.45-34.65-28.35-62.55-63-62.55zM705.5 180.8c0-19.8 16.2-36 36-36.45 19.8 0 36 16.2 36.45 36.45v108.9c0 19.8-16.2 36-36.45 36.45-19.8 0-36-16.2-36-36.45V180.8m-464.85 0c0-19.8 16.2-36 36-36.45 19.8 0 36 16.2 36.45 36.45v108.9c0 19.8-16.2 36-36.45 36.45-19.8 0-36-16.2-36-36.45V180.8m603 678.6H178.1c-7.2-0.45-12.6-6.3-13.05-13.05V411.2h691.65v434.7c-0.45 7.2-5.85 13.05-13.05 13.5zM257.3 500.3H372.5v55.8H257.3V500.3z m197.55 0h112.05v55.8H454.85V500.3z m198 0h112.05v55.8h-112.05V500.3z m-395.55 112.05H372.5v55.8H257.3v-55.8z m197.55 0h112.05v55.8H454.85v-55.8z m198 0h112.05v55.8h-112.05v-55.8z m-395.55 112.05H372.5v59.4H257.3v-59.4z m197.55 0h112.05v59.4H454.85v-59.4z m198 0h112.05v59.4h-112.05v-59.4z"
                p-id="1267"
                fill="#858585"
              ></path></svg
          ></span>
          <span class="article-meta-label">发表于</span>
          <span class="post-meta-date">{{ log_date }}</span>
        </div>
        <div class="log-content">
          <span>{{ log_content }}</span>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
   props:{
       log_img_srcs:{
       type: String,
      required: true,
       },
       log_title:String,
       log_date:String,
       log_content:String,


   }
}
</script>
<style>

.content-left-item2{
 width: 100%;
 height: 280px;
 box-shadow:7px 7px 5px 3px #999; 
 margin: 0 auto;
 margin-top: 50px;
 border-radius: 25px;
 background: rgb(245,245,245);
 display: flex;
 flex-flow: row-reverse nowrap;
 overflow: hidden;
}
.content-left-item2-img{
    width: 40%;
    height: 280px;
overflow: hidden;
    
}
.log-img2{
    display: block;
    width: 100%;
    height: 100%;
    border-top-right-radius:25px;
    border-bottom-right-radius:25px;
    object-fit: cover;
    border: 0;
    margin: 0;
    padding: 0;
    align-self: end;
    transition: all 0.8s linear;
    overflow: hidden;
}
.log-img2:hover{
   cursor: pointer;
  transform: rotate(20deg) scale(1.4);
}
.content-left-item2-info{
    width: 80%;
    height: auto;
    

}
.content-left-item2-info-div{
  width: 100%;
   height: 240px;
   margin: 50px 20px 10px 30px;
   margin-right: 100px;
}
.atrtcle-title{
    font-size: 1.2rem;
    line-height: 1.4;
    margin-bottom: 0.3rem;
    color: var(--text-highlight-color);
}
.article-meta-wrap{
    color: #858585;
    font-size: 90%;
} 
.article-meta-label{
    padding-right: 0.2rem;
}
.post-meta-date{
    cursor: default;
}
.log-content{
    margin-top: 0.3rem;
    -webkit-line-clamp: 3;
    width: 300px;
    height: 100%;
  
}


</style>