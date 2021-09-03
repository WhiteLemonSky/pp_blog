<template>
    <div class="card-contents">
        <div class="card-title">
<svg t="1624869208839" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5290" width="26" height="26"><path d="M928.024 508.595l-351.13 254.683L362.98 604.702 148.886 733.977V578.793l225.317-312.316L577.95 519.764l350.074-395.34z" fill="#159A8D" p-id="5291"></path><path d="M918.762 834.853H139.625V733.331l225.317-108.398 203.747 145.961L918.762 491.85z" fill="#D73949" p-id="5292"></path><path d="M959.159 928.219H64.063V98.125h37.045v787.166h858.051z" fill="#819292" p-id="5293"></path><path d="M580.658 796.245L369.686 628.169 158.642 760.785l-17.659-37.737 230.991-145.15 208.508 166.113 334.054-270.609 21.225 35.183z" fill="#D73949" p-id="5294"></path><path d="M152.112 601.753l-28.68-27.17L360.23 238.944 569.003 494.92 903.52 103.683l26.316 30.213-361.462 422.75L362.245 303.91z" fill="#159A8D" p-id="5295"></path></svg>
             <span style="margin-left:5px">网站资讯</span>
        </div>
       <div v-for="(index,item) in log_info_title.length">
      <log_info_item :info_item_date="log_info_title[item]" :info_item_count="log_info_count[item]"></log_info_item>
      
        </div>
    </div>
</template>
<script>
 import log_info_item  from './log-info-item.vue';
export default {
    components:{
   log_info_item
    },
   props:{
       log_info_title:Array,
       log_info_count:Array,
   }
}
</script>