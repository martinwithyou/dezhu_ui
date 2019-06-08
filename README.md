<p font-size="40px" align="center">基于 Vue 和 Webpack 构建的移动端UI组件库</p>

### 官网链接

[传送门](http://owl-ui.dengwb.com)

### 开发心得链接

[UI组件库从0到1开发心得](https://juejin.im/post/5c6504d06fb9a049c6445a25)

[UI组件库从1到N开发心得-组件篇](https://juejin.im/post/5ce21c8ee51d45109725fdbe)

### 安装

```bash
npm install owl-ui -S
```

### 使用

```js
import 'owl-ui/lib/flexible' // Mobile adaptive solution
import Vue from 'vue'

import Owl from 'owl-ui'
import 'owl-ui/lib/styles/owl-ui.css'

Vue.use(Owl)
```

### 按需加载

```js
import 'owl-ui/lib/flexible'
import Vue from 'vue'

import Button from 'owl-ui/lib/button/button.js'
import 'owl-ui/lib/button/button.css'

Vue.use(Button)
```

### 开发

```bash
git clone git@github.com:dengwb1991/owl-ui.git

cd owl-ui

npm install 

npm run dev

# 启动文档开发

npm run docs
```

### 命令介绍

```bash

npm run dev             #启动组件开发

npm run docs            #启动文档开发

npm run prod            #组件构建

npm run build           #整体构建

npm run build:style     #样式构建

npm run build:icon      #svg转化为iconfont

npm run build:docs      #文档构建

npm run build:example   #示例构建

npm run build:component #按需组件构建

npm run lint            #eslint测试

npm run unit            #组件单元测试

npm run test            #eslint测试 & 组件单元测试
```
