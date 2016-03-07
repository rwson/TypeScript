/**
 * Generic泛型
 * build by rwson @11/9/15
 * mail:rw_Song@sina.com
 */

interface Hello{
    <T>(arg:T):T;
}

function myHello<T>(arg:T):T{
    return arg;
}


var MH:Hello = myHello;
alert(MH<string>("hello"));

interface Hello2<T>{
    (arg:T):T;
}

function myHello2<T>(arg:T):T{
    return arg;
}

var mh:Hello2<number> = myHello2;
alert(mh(100));