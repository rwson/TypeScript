/**
 * class
 * typescript中的类
 * build by rwson @11/5/15
 * mail:rw_Song@sina.com
 */

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    print(){
        return this.name + this.age;
    }
}

var person = new Person("小宋",23);
alert(person.print());