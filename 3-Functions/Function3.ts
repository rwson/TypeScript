/**
 * Function3
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */


/**
 * 指定函数多个参数
 *
 * function fnName(firstName:string[指定传入string类型的参数],...resArg:string[] [前面有...指定多个参数,且为一个数组,取参数用数组的方式来取]){
 *      var arg = resArg[1];
 *      //  取得第三个参数
 * }
 */

function peopleName(firstName:string,...restArg:string[]){
    return firstName + "-" + restArg.join("-");
}

var pn = peopleName("hehe","haha","nini","meme","daibi","nihaoniubi");
document.getElementsByTagName("div")[0].innerHTML = pn;