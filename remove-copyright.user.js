// ==UserScript==
// @name         remove-copyright
// @namespace    https://github.com/SoraShu/remove-copyright
// @version      0.1.1
// @description  移除复制时的copyright信息，净化剪贴板
// @author       SoraShu
// @match        *://blog.csdn.net/*/article/details/*
// @match        *://*.blog.csdn.net/article/details/*
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @match        *://leetcode-cn.com/problems/*
// @match        *://www.bilibili.com/read/*
// @icon         https://z3.ax1x.com/2021/08/16/fWMOMT.png
// @grant        none
// @license      GPL-3.0 License
// @run-at document-start
// ==/UserScript==


//随便写的，其实也就一行代码
//将保留原格式，不影响将复制的内容直接贴到Typora里
//目前支持知乎和CSDN
(function() {
    'use strict';
    document.oncopy = event => event.clipboardData.setData('text', window.getSelection(0).toString()); //es6 yyds
})();