import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.20097747.xyz/',
  lang: 'zh-CN',
  title: '追梦幻境云之都',
  author: {
    name: '何星梦',
    avatar: "https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting@master/dreamerhe微信图片_20250211205333.9nzwsshfcx.webp"
  },
  description: '朝着梦想前进！.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 1030484607',
      link: 'https://qm.qq.com/q/jvJiQuvDj2',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/dreamerhe114514',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/3546376497531614',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:dreamerhe7747@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '微信支付',
        url: 'https://jsd2.dreamerhe.cn/gh/dreamerhe114514/picx-images-hosting@master/dreamerhe0d89e0c726a48845d047b1bc71e813c.1ovjxoqqll.webp',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})

