# 简介

适用于Ghost博客系统的简约主题。

# 预览
PC端预览图

![YtiABt.png](https://s1.ax1x.com/2020/05/12/YtiABt.png)

移动端预览图

![YtFC5T.md.png](https://s1.ax1x.com/2020/05/12/YtFC5T.md.png)

## 特性

* 风格简约
* 代码高亮为vue风格
* 布局自适应

## 使用

首先下载主题包↓

[旧版本](https://github.com/zhaohaodang/ghost-theme-tiny/archive/1.0.0.zip)（适合版本低于1.0的Ghost系统）

[最新版本](https://github.com/zhaohaodang/ghost-theme-tiny/releases/tag/2.0.0)（适合4.0版本的Ghost系统）

进入博客后台（博客地址+`/ghost`），点击左侧栏的小齿轮图标，点击`Themes`模块，然后点击底部`upload theme`按钮（记得active）。

## 开启评论或统计
默认不开启任何评论或统计，你可以在`{{ghost_head}}`为以下几个全局变量赋值，以开启对应评论或者统计：

```javascript
<script>
    //baidu_tongji 是你在百度统计申请到的id
    var baidu_tongji = '33fbd6f1c17fbe2f063ddd873f375596';
    //disqus_shortname 是你在disqus填写的简写名称
    var disqus_shortname = 'zhaohd';
</script>
```
## 开启归档和标签页面
1. 进入博客的后台
2. 点击左侧栏的Pages，新建一个page
3. 点击右侧的小齿轮，在底部为页面选择tags模板或者archives模板
4. 发布页面

