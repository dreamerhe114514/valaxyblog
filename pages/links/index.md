---
title: 我的小伙伴们
keywords: 链接
description: 何星梦的小伙伴们
links:
  - url: https://www.yunyoujun.cn
    avatar: https://www.yunyoujun.cn/images/avatar.jpg
    name: 云游君
    blog: 云游君的小站
    desc: 希望能成为一个有趣的人。
    email: me@yunyoujun.cn
    color: "#0078e7"
  - url: https://valaxy.site
    avatar: https://valaxy.site/favicon.svg
    name: Valaxy Org
    blog: Valaxy Site
    desc: 下一代静态博客框架
    email: i@valaxy.site
    color: "#6058d9"
  - url: https://blog.storical.space/
    avatar: https://blog.storical.space/images/icon.png
    name: 王九弦SZ·Ninty
    blog: 汐塔魔法屋
    desc: 种下一颗有故事的种子，让它带着魔法和奇迹生根发芽
    email: email@sinzmise.top
    color: "#e66744"
# 也可以是一个 JSON 链接
# links: https://friends.yunyoujun.cn/links.json
random: true
---

<YunLinks :links="frontmatter.links" :random="frontmatter.random" errorImg="https://cdn.yunyoujun.cn/img/avatar/none.jpg" />