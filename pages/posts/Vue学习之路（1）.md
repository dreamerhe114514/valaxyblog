---
layout: post
title: Vue学习之路（1）
tags:
  - 学习
  - vue
  - 笔记
categories:
  - 学习
  - vue
  - 笔记
date: 2025-01-16 20:44:35
cover: https://cdn.jsdelivr.net/gh/dreamerhe114514/picx-images-hosting@master/BlogANDdailypic/dreamerhevuestudy1.4ub0vhxk9k.webp
---
哈哈哈，已经许久许久许久许久许久X N 没有更新的我，还是又双叒叕来更新啦~还是发生了很多事情的，到时候看有时间单独出个小G吧，ok,开始我们的正文
# 正文部分（还是口水话）
哈哈，也是又到了寒假了，闲的慌的我也是又双叒叕爱上了某款代码兄----Vue,也是又搞了一本vue.js从入门到精通电子书
（那么就有人问了当然甚至还有来自我自己的问） 那C呢？啊哈哈哈，这个当然是个好问题了，所以，~~暂时跳过~~，肯定不是啦铁汁，也要学的啦，但是重点是放在了Vue上面，没错，我是个善变的人，好啦好啦，现在就开始我们的笔G吧

# 正式开始

好啦，让我们看看第一步是干什么
## 认识Vue

不想认识，认为没用，所以直接跳到下一章节。

## 搭建开发与调试环境

接下来就是安装啦，分为几个方式，但我选择使用NPM <font color=red>毕竟安装node.js就能使用</font>，何乐而不为呢？所以我们只需要安装nodejs就好了，所以我们就下一步

# 创建vue3工程



我们使用

``` CMD
pnpm create vue@latest
```

来进行创建项目工程，其中问到了几个问题，我也是跟着B站视频进行配置了，那么问题来了，为什么不继续看我的电子书了呢？啊哈，那当然是因为，第一步就没看懂那引用。。。。

接下来是用cmd配置Vue项目的阶段，我就懒得一个一个的解释说明了。

![dreamerheSnipaste_2025-01-17_15-27-52.231yohtgt1.webp](https://cdn.jsdelivr.net/gh/dreamerhe114514/picx-images-hosting@master/BlogANDdailypic/dreamerheSnipaste_2025-01-17_15-27-52.231yohtgt1.webp)

然后使用

``` cmd	
npm i
```

安装好了插件，随后开始讲解起了里面的文件

## 文件讲解

视频中，对Vue项目里的文件进行了讲解，其中了解到，html为<font color=red>入口文件</font>，目前不用太过在乎，随后开始讲解起来了src里面的文件，那当然，对于我们博主来说，src这种文件是干嘛的也都不用多说了，也就是源文件啦。

### 然后着重讲解了**main.ts**，

然后我们对里面的代码进行分层次了解

``` ts
import './assets/main.css' //样式文件

import { createApp } from 'vue' //创建应用当作花盆
import App from './App.vue' //为一个组件，组件为x.vue当作根支

createApp(App).mount('#app')
// APP为根 mount为挂载，挂载到APP，app在我们的index.html的id=app
```

### components文件夹

啊哈，还是组件文件就不过多介绍了

### 删掉Src

为什么要删呢？因为根据后面up的描述，要我们手把手一起写，所以就删吧QWQ

#### 创建新文件

也就是我们的App.vue和main.ts文件

在我们的main.ts文件夹里写入代码

``` ts
// 引入cteatAPP用于创建应用
import { createApp} from 'vue'
// 引入APP根组件
import App from './App.vue'

createApp(App).mount('#app')
```

然后我们再转入到App.vue进行写代码啦,虽然有一堆前端的东西，但是应该并不影响

``` vue
<template>
    <div class="app">
        <h1>这里是dreamerhe</h1>
</div>
</template>

<script lang="ts">
    export default {
        name:'APP' //组件名
    } 
</script>

<style>
    .app {
        background-color: yellow;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
```



然后我们run一波

得到如下效果

![dreamerheSnipaste_2025-01-17_16-19-39.4xumuc25xg.webp](https://cdn.jsdelivr.net/gh/dreamerhe114514/picx-images-hosting@master/BlogANDdailypic/dreamerheSnipaste_2025-01-17_16-19-39.4xumuc25xg.webp)

# 本次总结

也该结束本次学习啦，也不想写了QWQ

· Vite项目中，index.html是入口文件，在项目最外层

·  加载index.html之后，Vite解析了

``` js
<script tpye="model" scr=xxx>指向的JS
```

 Vue3中是通过createApp函数创建一个应用实例的。

OK了OOOOOOOOOOOOOOOOOOVER了。
