/**
 * Generic泛型
 * build by rwson @11/9/15
 * mail:rw_Song@sina.com
 */

class HelloNum<T>{
    Ten:T;
    add:(x:T,y:T)=>T;
}

var myHelloNum = new HelloNum<string>();
myHelloNum.Ten = "10";
myHelloNum.add = function(x,y){
    return x + y;
};

alert(myHelloNum.add("10",myHelloNum.Ten));