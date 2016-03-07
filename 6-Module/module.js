/**
 * module.js
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 * js中的module模式
 * 1、模块化、可重用
 * 2、封装变量和函数
 */

/**
 * 闭包
 */
(function(){
    //  ...
}());

var a;  //  全局变量
function hello(){
    var b;  //  局部变量
    c;      //  全局变量
}

(function($,w){

})(jQuery,window);

