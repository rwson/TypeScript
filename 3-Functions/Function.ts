/**
 * Function
 * 函数
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */

/**
 * 给函数指定返回值的几种方式
 *
 * function fnName(arg:string[指定传入string类型的数据],arg2:number[指定传入number类型的数据]):number[指定函数的返回值为number类型]{
 *     函数体...
 * }
 *
 * var fnName = function(arg:string[指定传入string类型的数据],arg2:number[指定传入number类型的数据]):string[指定函数的返回值为string类型]{}
 *
 * var fnName:(name:string[指定传入string类型的数据],age:number[指定传入number类型的数据])=>number=function(n:string,a:number):number[指定函数的返回值为number类型]{}
 */

function add(x:number,y:number):number{
    return x + y;
}

var add2 = function(x:number,y:string):string{
    return "hello ts";
};

var myAddTs:(name:string,age:number)=>number=function(n:string,a:number):number{
    return 1;
};