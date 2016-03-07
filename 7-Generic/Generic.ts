/**
 * Generic泛型
 * build by rwson @11/9/15
 * mail:rw_Song@sina.com
 */

function Hello(num:number):number{
    return num;
}

function Hello2<T>(arg:T):T{
    return arg;
}

var outPut = Hello2<string>("hello rwson");
console.log(outPut);