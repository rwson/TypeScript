/**
 * Generic泛型
 * build by rwson @11/9/15
 * mail:rw_Song@sina.com
 */

//function Hello<T>(num:T):T{
//    alert(num.length);
//    return num;
//}

function Hello<T>(str:T[]):T[]{
    return str;
}

var list:Array<string> = Hello<string>(["1","2","3"]);

for(var i = 0,len = list.length;i < len;i ++){
    console.log(list[i]);
}