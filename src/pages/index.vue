<template>
  <div>
    <!-- 导航栏 -->
    <Nav></Nav>
    <!-- 轮播 -->
    <b-carousel
      id="carousel-fade"
      :interval="4000"
      controls
      indicator
      fade
      background="#ababab"
      img-width="100%"
    >
    <b-carousel-slide  v-for="item in imgArray" :key='item.rotationId'>
         <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            :src="item.rotationImg"
            alt="image slot"
            @click="getCarouselUrl(item)"
          >
        </template>    
    </b-carousel-slide>
    </b-carousel> 

    <Title title="公司简介"></Title>
    <!-- 关于我们 -->
    <div class="summary">
      <div class="summary-main">
        <div class="summary-main_title">关于我们</div>
        <div class="summary-main_content">{{summary}}</div>
        <div class="summary-main_btn">
          <b-button
            pill
            variant="primary"
          >了解更多</b-button>
        </div>
      </div>
      <div class="summary-img">
        <img v-lazy="gongsi">
      </div>
    </div>

    <Title title="产品功能"></Title>
    <div class="showPro">
      <div
        class="proItem"
        v-for="item in proList"
        :key="item.title"
        @mouseover="showProInfo(item)"
      >
        <div class="wrap">
          <div class="proItem-img">
            <img v-lazy="item.productImg">
          </div>
          <div class="proItem-con">
            {{item.productDetail}}
          </div>
        </div>
        <div class="proItem-title">{{item.productTitle}}</div>
        <div class="proItem-title_eng">{{item.productAbbreviation}}</div>
      </div>
    </div>

    <!-- 系统组成 -->
    <div class="system">
      <div class="system_title">
        <p>系统组成</p>
        <img
          v-lazy="Dot01"
          alt=""
        >
      </div>
      <div class="system_top">
        <div class="system_top-icon">
          <img
            v-lazy="hjkzq1"
            alt=""
          >
          <p>汇接控制器</p>
        </div>
        <div class="system_top-icon">
          <img
            v-lazy="xhmk"
            alt=""
          >
          <p>巡航模块</p>
        </div>
        <div class="system_top-icon">
          <img
            v-lazy="dcmk"
            alt=""
          >
          <p>倒车模块</p>
        </div>
      </div>
      <div class="system_bottom">
        <div class="system_bottom-icon">
          <img
            v-lazy="AEBS"
            alt=""
          >
          <p>AEBS电磁阀</p>
        </div>
        <div class="system_bottom-icon">
          <img
            v-lazy="zddj"
            alt=""
          >
          <p>制动电机</p>
        </div>
        <div class="system_bottom-icon">
          <img
            v-lazy="jgld"
            alt=""
          >
          <p>激光雷达</p>
        </div>
        <div class="system_bottom-icon">
          <img
            v-lazy="yjzj"
            alt=""
          >
          <p>预警主机</p>
        </div>
      </div>
      <div></div>
    </div>

    <!-- 产业政策 -->
    <Title title="产业政策"></Title>
    <h4 style="margin-top: .8rem">护航产品可降低汽车追尾事故率80%以上</h4>
    <h4>可降低综合交通事故率50%以上</h4>
    <div class="title">
      党中央十九大报告指出“树立安全发展理念，弘扬生命至上、安全第一的思想，健全公共安全体系，完善安全生产责任制，坚决遏制重特大安全事故，提升防灾减灾救灾能力”，并明确提出加强大数据、新技术的应用。防碰撞技术正是有效遏制重大安全事故发生的先进技术，符合国家政府未来发展方向。
    </div>
    <hr>
    <div class="news">
      <div class="news-img">
        <b-carousel
          id="car1"
          :interval="4000"
          controls
          indicator
          fade
          background="#ababab"
          img-width="100%"
        >
          <!-- <b-carousel-slide :img-src="banner"></b-carousel-slide> -->
          <b-carousel-slide
            v-for="item in newsList"
            :key="item.newsId"
            :img-src="item.newsImg"
            :text="item.newsTitle"
            style="height: 15rem;"
          >
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="newslist">
        <div
          v-for="item in newsList"
          :key="item.newsId"
          class="newsItem"
          @click="showNews(item)"
        >
          <div class="newsItem-title">{{item.newsTitle}}</div>
          <div class="newsItem-date">
            {{item.date}}
            <!-- <div class="newsItem-da_author">{{item.author}}</div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="advertise_img">
      <img
        v-lazy="xshh"
        alt=""
      >
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import xshh from "../assets/xshh.png";
import xtzc from "../assets/xtzc.jpg";
import AEBS from "../assets/AEBS.png";
import dcmk from "../assets/dcmk.png";
import Dot01 from "../assets/Dot01.png";
import hjkzq1 from "../assets/hjkzq1.png";
import jgld from "../assets/jgld.png";
import xhmk from "../assets/xhmk.png";
import yjzj from "../assets/yjzj.png";
import zddj from "../assets/zddj.png";
import gongsi from "../assets/gongsi.png";
import AEB from "../assets/AEB.png";
import FCW from "../assets/FCW.png";
import FD　from "../assets/FD.png";
import VRM from "../assets/VRM.png";
export default {
  name: "index",
  data() {
    return {
      xshh,
      xtzc,
      AEBS,
      dcmk,
      Dot01,
      hjkzq1,
      jgld,
      xhmk,
      yjzj,
      zddj,
      gongsi,
      AEB, FD, FCW, VRM,
      imgArray: [], // 轮播图片列表
      summary: "", //企业文字描述
      proList: [], // 产品功能列表
      newsList: [] // 新闻列表
    };
  },
  async mounted() {
    this.imgArray = [{"rotationId":1,"rotationImg":"http://10.16.8.55:80/syhhUploadFile/img/caro.jpg","redirectUrl":null,"position":1},{"rotationId":95,"rotationImg":"http://10.16.8.55:80/syhhUploadFile/img/img2019-12-12_08-42-16微信图片_20191211143444.jpg","redirectUrl":"http://www.baidu.com","position":2},{"rotationId":2,"rotationImg":"http://10.16.8.55:80/syhhUploadFile/img/car.jpg","redirectUrl":null,"position":3},{"rotationId":3,"rotationImg":"http://10.16.8.55:80/syhhUploadFile/img/banner.jpg","redirectUrl":null,"position":4}];
    // this.summary =
    //   "江苏神雨护航科技发展有限公司是由江苏弗莱迪斯汽车系统有限公司、河南护航实业股份有限公司、常州市浩鹏车辆部件有限公司三家单位于2019年联合发起成立，是集研发、生产、销售、服务为一体，具备自主知识产权和高科技研发能力的高科技型公司。公司主要研发经营的产品有：汽车紧急制动产品系列及其电子部件；汽车特别是新能源汽车适配的小三电系列等。公司向全国整车厂提供紧急制动、自动防撞技术产品及解决方案，为客货运输集团和普通乘用车用户提供汽车安全产品服务";
    this.proList = [
      {
        productImg: this.FCW,
        productTitle: "汽车防撞系统",
        productAbbreviation: "FCW",
        productDetail:
          "车辆在行驶过程中，安装在车前方的测距雷达不断检测本车与前方障碍物的安全距离，当存在碰撞危险时，系统先通过声、光报警，限制动力输出(断油)、制动等措施，使车辆减速以实现防撞功能。"
      },
      {
        productImg: this.AEB,
        productTitle: "汽车紧急制动",
        productAbbreviation: "AEB",
        productDetail:
          "车辆行驶过程中自动探测前方的车辆或障碍物，当检测潜在的前向碰撞危险时，发出预警提醒驾驶员并激活本车制动系统，通过降速来实现避免碰撞的目的。"
      },
      {
        productImg: this.FD,
        productTitle: "驾驶行为检测",
        productAbbreviation: "FD",
        productDetail:
          "通过主动安全数据分析，判断驾驶员驾驶习惯，通过对人的精准管控，可有效避免和降低交通事故率。"
      },
      {
        productImg: this.VRM,
        productTitle: "车辆远程监控",
        productAbbreviation: "VRM",
        productDetail:
          "拥有权限的管理人员通过管理中心或手机可远程控制车辆。"
      }
    ];

    // this.newsList = [
    //   {
    //     newsTitle: "“党建动车组”引领，跑出区域高质量发展加速度",
    //     date: "2019-11-20",
    //     newsId: 1,
    //     newsImg: this.pro1,
    //     newsPath: "https://mp.weixin.qq.com/s/2ttT5OAKI_KIdJJUSZHS9A"
    //   },
    //   {
    //     newsTitle: "装了它国产“小面包”超越进口豪车 该项目落户雨花",
    //     date: "2019-11-16",
    //     newsId: 2,
    //     newsImg: this.pro2,
    //     newsPath: "https://mp.weixin.qq.com/s/7TM8ERroHTdVqHPSJvVN2g"
    //   },
    //   {
    //     newsTitle: "赞！雨花这个基层党建创新项目，为区域经济发展“护航”",
    //     date: "2019-11-15",
    //     newsId: 3,
    //     newsImg: this.pro3,
    //     newsPath: "https://mp.weixin.qq.com/s/7TM8ERroHTdVqHPSJvVN2g"
    //   },
    //   {
    //     newsTitle: "江苏神雨护航科技发展有限公司隆重揭牌",
    //     date: "2019-11-14",
    //     newsId: 4,
    //     newsImg: this.pro4,
    //     newsPath: "https://mp.weixin.qq.com/s/2ttT5OAKI_KIdJJUSZHS9A"
    //   }
    // ];
    await this.getCarousel();
    await this.getCompInfo()
    // await this.getProductInfo();
    await this.getNewsList();
  },
  methods: {
    // 获取轮播图
    async getCarousel() {
      const [err, res] = await this.$api.getRotationImg();
      // console.log(res);
      if (err) return;
      if (res && res.success) {
        this.imgArray = res.data;
      }
    },
    // 轮播跳转
    getCarouselUrl(item){
      // console.log(item);
      if(item.redirectUrl === null || item.redirectUrl.length < 1) return;
      window.open(item.redirectUrl)
    },
    // 获取公司基本信息
    async getCompInfo() {
      const [err, res] = await this.$api.getCompanyInfo();
      if(err) return;
      // console.log(res);
      if(res && res.success){
        this.summary = res.data.introduce
      }
    },
    // 获取产品
    async getProductInfo() {
      const params = {
        pageNo: 1,
        pageSize: 4
      };
      const [err, res] = await this.$api.getProductInfo(params);
      // console.log(res);
    },
    // 获取新闻
    async getNewsList() {
      const params = {
        pageNo: 1,
        pageSize: 6
      };
      // const [err, res] = await this.$api.getNewsInfo(params)
      const [err, res] = await this.$api.getNewsInfo(params);
      if(err) return;
      // console.log(res);
      if(res && res.success){
        this.newsList = res.data
      }
    },
    // 产品列表悬浮
    showProInfo(item) {
      // console.log(item);
    },
    //  新闻跳转
    showNews(item) {
      window.open(item.newsPath);
    }
  }
};
</script>

<style scoped>
.summary-main_title {
  font-weight: bold;
}
.summary-main_content {
  text-align: left;
}
.proItem-title_eng {
  font-size: 0.5rem;
  color: rgb(116, 112, 112);
}
.title {
  margin: 0.8rem auto;
  font-size: 1rem;
  text-align: left;
}
.newslist {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
.newsItem {
  width: 100%;
  display: flex;
  height: 40px;
  padding: 3px;
  align-items: baseline;
}
.newsItem-title {
  line-height: 30px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.newsItem:hover {
  background-color: #2f70dc;
  color: #fff;
  border: #2f70dc 1px solid;
  border-radius: 5px;
  cursor: pointer;
}
.newsItem-date {
  width: 20%;
  font-size: 0.9rem;
  /* color: #333; */
}
.advertise_img {
  width: 100%;
}
.advertise_img img {
  width: 100%;
  height: auto;
}
/* 宽度大于768 */
@media (min-width: 768px) {
  .summary {
    margin: 1.8rem auto 0;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .summary-main {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 15px;
    max-height: 350px;
  }
  .summary-img img {
    max-height: 350px;
    width: 100%;
  }
  .summary-img {
    width: 50%;
  }
  .summary-main_title {
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    /* height: 15%; */
  }
  .summary-main_content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    overflow: hidden;
    margin-bottom: 0.8rem;
    width: 100%;
  }
  .showPro {
    margin: 1.8rem auto;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .proItem {
    width: 22%;
  }
  .wrap {
    transition: transform 0.6s ease-out;
    transition: transform 0.5s ease-in-out;
    -webkit-transition: transform 0.5s ease-in-out;
    -moz-transition: transform 0.5s ease-in-out;
    -ms-transition: transform 0.5s ease-in-out;
    -o-transition: transform 0.5s ease-in-out;
    -webkit-transform-style: preserve-3d;
    /*使其子类变换后得以保留 3d转换后的位置*/
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    display: block;
    position: relative;
  }
  .wrap:hover .proItem-img {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    z-index: 1;
  }
  .wrap:hover .proItem-con {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    z-index: 2;
  }
  .proItem-img,
  .proItem-con {
    transition: 0.6s ease-out;
    -webkit-transition: 0.6s ease-out;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: absolute;
    top: 0;
    left: 0;
  }
  .proItem-img {
    z-index: 2;
    transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
  }
  .proItem-con {
    z-index: 1;
    transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
  }
  .proItem-con {
    background-color: #333;
    color: #fff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
    padding: 8px 5px;
    font-size: 0.8rem;
    text-align: left;
  }
  .wrap,
  .proItem-img,
  .proItem-con {
    width: 100%;
    height: 10.5rem;
    margin-bottom: 1.5rem;
  }
  .proItem-img img {
    width: 100%;
    height: 100%;
  }
  .title {
    width: 40%;
  }
  hr {
    width: 40%;
  }
  .news {
    width: 60%;
    margin: 1.8rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
  .news-img {
    width: 50%;
  }
  .news-img img {
    width: 100%;
    max-height: 300px;
  }
  .newslist {
    width: 50%;
  }
}
/* 宽度小于767 */
@media (max-width: 767px) {
  .summary {
    width: 100%;
    padding: 5px;
  }
  .summary-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .summary-main_title {
    margin-bottom: 10px;
    font-size: 19px;
  }
  .summary-main_content {
    margin-bottom: 10px;
  }
  .summary-main_btn {
    margin-bottom: 10px;
  }
  /* .summary-img{
      width: 100%;
    } */
  .summary-img img {
    width: 100%;
    max-height: 180px;
  }
  .showPro {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .proItem {
    width: 48%;
    margin-bottom: 10px;
  }
  .proItem-img {
    margin-bottom: 15px;
  }
  .proItem-img img {
    width: 100%;
    height: auto;
  }
  .proItem-con {
    display: none;
  }
  .title {
    padding: 5px;
  }
}
</style>