<template>
    <div class="phone-home-container">
        <div v-for="(item,index) in log_img_srcs1.length">
        <phone_home_item  :log_img_srcs="log_img_srcs1[index]" :log_title="log_title1[index]" :log_date="log_date1[index]" :log_content="log_content1[index]"> </phone_home_item>
        </div>
        <log_card></log_card>
        <notice></notice>
        <new_article :new_article_date="log_date"
            :new_article_img_src="log_img_srcs"
            :new_article_title="log_title"></new_article>
            <classify></classify>
            <logtag></logtag>
             <archive
            :aritem_item_count="archive_count"
            :aritem_item_date="archive_date"
          ></archive>
            <log_info
            :log_info_count="log_info_count"
            :log_info_title="log_info_title"
          ></log_info>
         <div  class="myhome-bootom">
       <p>@❤2020 By Pander</p>
       <p>-The World Yours-</p>
     </div>
    </div>
</template>

<script>
import phone_home_item from "./phone-home/phone-home-item";
import log_card from "./log-card.vue";
import notice from "./notice.vue";
import new_article from "./new-article";
import classify from "./classify.vue";
import logtag from "./tag.vue";
import archive from "./archive.vue";
import log_info from "./log-info.vue"
export default {
  data:function() {
    return {
        //log_item测试数据
         log_img_srcs: [
        require("../assets/img/log-img/20201202-3021.png"),
        require("../assets/img/log-img/20201210-3029.png"),
        require("../assets/img/log-img/20201203-3022.png"),
        require("../assets/img/log-img/20201207-3026.png"),
        require("../assets/img/log-img/20201206-3025.png"),
        require("../assets/img/log-img/20201201-3020.png"),
        require("../assets/img/log-img/20121204-71.png"),
        require("../assets/img/log-img/20121208-75.png"),
        require("../assets/img/log-img/20201205-3024.png"),
      ],
      log_info_title: [
        "文章数目:",
        "本站总字数:",
        "本站访客数:",
        "本站总访问量:",
      ],
      log_info_count: ["104", "167.5k", "2", "232"],
      archive_date: [
        "十二月 2020",
        "十一月 2020",
        "十月 2020",
        "九月 2020",
        "八月 2020",
        "七月 2020",
        "六月 2020",
        "五月 2020",
        "四月 2020",
      ],
      archive_count: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      log_title: [
        "草泥马的世界1",
        "草泥马的世界2",
        "草泥马的世界3",
        "草泥马的世界4",
        "草泥马的世界5",
        "草泥马的世界6",
        "草泥马的世界7",
        "草泥马的世界8",
        "草泥马的世界9",
        "草泥马的世界10",
      ],
      log_date: [
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
        "2021-04-01",
      ],
      log_content: [
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
        " Reprinted from ONE摄影对自己不满足，是任何真正有天才的人的根本特征之一。摄影我告诉自己，成熟意味着镇静自若地接受生活的波折，要在实际生活和理论之间划出一道界限。",
      ],
    }
  },
  components: {
    phone_home_item,
    log_card,
    notice,
    new_article,
    classify,
    logtag,
    archive,
    log_info

  },
  props: {
    log_img_srcs1: Array,
    log_title1: Array,
    log_date1: Array,
    log_content1: Array,
  },
};
</script>
<style>

.phone-home-container {

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
</style>
