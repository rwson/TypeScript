/**
 * Generic泛型
 * build by rwson @11/9/15
 * mail:rw_Song@sina.com
 */

function Hello<T>(arg:T):T{
    return arg;
}

var myHello:<K>(arg:K)=>K = Hello;
alert(myHello("hello"));

