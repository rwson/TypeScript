/**
 * interface中的数组类型
 * build by rwson @11/8/15
 * mail:rw_Song@sina.com
 */

interface StringArray{
    [index:number]:string;
}

var MyArray:StringArray;
MyArray = ["小","宋","是","帅","比"];
alert(MyArray[2]);