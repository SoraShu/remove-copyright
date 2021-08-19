# remove-copyright

## 作用

移除复制时的copyright信息，净化剪贴板。

## 食用方法

1. 下载Tampermonkey拓展插件。
2. 点击链接[remove-copyright.user.js](https://github.com/SoraShu/remove-copyright/raw/main/remove-copyright.user.js)安装脚本。这个链接指向仓库中文件`remove-copyright.user.js`的raw视图，`*.user.js`会被Tampermonkey识别并自动跳转到安装界面。

## 支持网站

首先这个脚本很简单(只有一行)，适用范围应该很广。但我总不能写一个 `@match *://*/*` 在那里让它在所有网站都运行。可以通过自行添加`@match`来使脚本在网站上运行，或者开issue告诉我。

## TODO

1. enable copy。某些网页不是有copyright信息，而是不允许复制，有的是连选中都不行(比如某国产游戏的观测枢)，想实现使这些网站能够被复制。~~好像有人写好了，是不是可以用个轮子啥的~~

## 目前支持网站列表

|网站|匹配|
|:--:|:--:|
|CSDN|\*://blog.csdn.net/\*/article/details/\*</br>\*://\*.blog.csdn.net/article/details/\*|
|知乎|\*://www.zhihu.com/\*</br>\*://zhuanlan.zhihu.com/\*|
|leetcode题解|\*://leetcode-cn.com/problems/\*|
|bilibili专栏|\*://www.bilibili.com/read/\*|
