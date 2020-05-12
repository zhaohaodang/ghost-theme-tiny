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

[最新版本](https://github.com/zhaohaodang/ghost-theme-tiny/archive/1.1.2.zip)（适合版本大于等于1.0的Ghost系统）

进入博客后台（博客地址+`/ghost`），点击左侧栏的`Design`栏目，在`Themes`标签下上传压缩包，激活。

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
## 开启归档页面
1. 进入博客的后台
2. New story，新建一篇文章，标题为Archives
3. 点击文章右侧的小齿轮，确认“Post URL”是否为“archives”，不是则修改为“archives”。接着勾选“Turn this post into a page”，然后**发布文章**
> 注意！！！如果你下载的是旧版本（Ghost版本低于1.0），“Post URL”将会被系统格式化成“archives-post”，我们无法修改为“archives”，这时你只需将本主题包中的`page-archives.hbs`文件名，修改为与“Post URL”相对应的`page-archives-post.hbs`即可。
