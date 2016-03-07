/**
 * Function2
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */


/**
 * 指定函数的可变参数和参数默认值
 *
 * function fnName(firstName?:string[指定传入string类型的数据,加?也可以不传],lastname:string[指定传入string类型的数据,加?也可以不传]]){}
 *
 * function fnName(firstName:string[指定传入String类型的数据],last="宋")
 */

function buildName(firstName?:string,lastname?:string){
    return lastname ? firstName + "" + lastname : firstName;
}

var res1 = buildName("小","宋");
var res2 = buildName("小");
var res3 = buildName();
//var res4 = buildName("小","宋","帅比");

function buildName2(firstName:string,lastname="宋"){
    return firstName + lastname;
}

var res5 = buildName2("小","宋");
var res6 = buildName2("小");
//var res7 = buildName2();

var arr:Array<string> = [res1,res2,res3,res5,res6];
document.getElementsByTagName("div")[0].innerHTML = arr.join("-");