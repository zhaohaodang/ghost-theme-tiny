# 简介

适用于Ghost博客系统的极简主题。

# 预览

[在线预览](https://zhaohaodang.com/blog/)

## 特性

* ​
* 代码高亮为vue风格
* 布局自适应

## 安装

[下载主题压缩包](https://github.com/zhaohaodang/tiny/archive/1.0.0.zip)，将解压后tiny-x.x.x文件夹中的tiny-x.x.x文件夹复制到`Ghost-x.x.x\content\themes`目录下，重新启动Ghost。

## 开启评论或统计
默认不开启任何评论或统计，你可以在`{{ghost_head}}`为以下几个全局变量赋值，以开启对应评论或者统计：

```javascript
<script>
    //请将变量赋值为你本人在对应平台申请获得的id
    //百度统计id
    var bdtjId = '33fbd6f1c17fbe2f063ddd873f375596';
    //谷歌统计id
    var gaId = 'UA-100015685-2';
    //国外评论插件-disqus的id
    var disqusId = 'zhaohd-blog';
    //国内评论插件-畅言的id以及conf
    var appid = 'cyt4F7Qst'; 
    var conf = 'prod_57fac42b23b60c692ac8ee4ed535d8f3'; 
</script>
```