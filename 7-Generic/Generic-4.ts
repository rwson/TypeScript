/**
 * Generic泛型
 * build by rwson @11/9/15
 * mail:rw_Song@sina.com
 */

var myFunc= function(a:number):string{
    return "hello " + a;
};

alert(myFunc(2));

function Hello<T>(arg:T):T{
    return arg;
}

var myHello:{<T>(arg:T):T} = Hello;
alert(myHello("hehe"));
