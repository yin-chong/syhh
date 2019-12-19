export default {
  baseUrl: {
    dev: 'http://10.16.8.55:8080/syhhFront/',
    development: 'http://10.16.8.55:8080/syhhFront/',
    production: '/syhhFront/'
  },
  apiList: [
    // index.vue
    // 轮播图
    {
      name: 'rotationImg',
      url: 'getRotationImg.do',
      method: ['get']
    },
    // 公司基本信息
    {
      name: 'companyInfo',
      url: 'getCompanyInfo.do',
      method: ['get']
    },
    // 公司产品
    {
      name: 'productInfo',
      url: 'getProductInfo.do',
      method: ['get']
    },
    // 新闻
    {
      name: 'newsInfo',
      url: 'getNewsInfo.do',
      method: ['get']
    }
  ]
}
