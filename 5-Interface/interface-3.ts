/**
 * interface-2
 * 接口的函数类型
 * build by rwson @11/6/15
 * mail:rw_Song@sina.com
 */

interface SearchFunc{
    (source:string,subString:string):boolean;
}

var mySearch:SearchFunc;
mySearch = function(source:string,subString:string){
    return source.search(subString) != -1;
};

alert(mySearch("么么哒","哒"));
alert(mySearch("呵呵哒","么"));