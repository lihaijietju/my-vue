# my-webpack-vue


## Start

 - git克隆代码，切入主目录

``` bash
npm install
```

## Develop
 - 如果8080端口被占用，自动跳转去8081端口

``` bash
# serve with hot reload at localhost:8080
npm run dev
```

## Build

``` bash
# build for production with minification
npm run build
```

## 接口转发
 - 在本model在本地起服务器时候提供了接口转发功能，转发文件配置在主目录下的proxy.js文件里面，模板文件只是提供了一个示例

## ui组件库
 - ui组件库本model采用了饿了么团队开源的element-ui，如果不满意可自行替换，在src/main.js里面即可替换，具体使用请参考官方文档
