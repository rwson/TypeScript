/**
 * interface-2
 * 接口的可选属性
 * build by rwson @11/6/15
 * mail:rw_Song@sina.com
 */

interface Person{
    name?:string;
    age?:number;
}

function printInfo(info:Person){
    console.log(info);
}

var info = {
    "name":"小宋",
    "age":23
};

printInfo(info);

var info2 = {
    "name":"小宋"
};

printInfo(info2);