/**
 * class
 * typescript中的类的继承
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
    tell(){
        return this.name + this.age;
    }
}

class Student extends Person{
    school:string;
    constructor(school:string){
        this.school = school;
        super("小宋",23);
    }
    tell(){
        return this.name + this.age + this.school;
    }
}

var student = new Student("清华大学");
alert(student.tell());