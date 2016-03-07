/**
 * class
 * typescript中的static
 * public private
 * build by rwson @11/5/15
 * mail:rw_Song@sina.com
 */

class Persion{
    static name:string;
    tell(){
        alert("My Name is:" + Persion.name);
    }
}

var person = new Persion();
Persion.name = "呵呵哒";
person.tell();
