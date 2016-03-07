/**
 * Function5
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */

/**
 * 方法重载:方法名相同,参数个数类型、个数或返回值类型不同
 * typescript中方法的重载
 */


function attr(name:string):string;

function attr(age:number):number;

function attr(nameorage:any):any {
    if (nameorage && typeof nameorage == "string") {
        alert("姓名");
    } else {
        alert("年龄");
    }
}

attr("小宋");
attr(23);