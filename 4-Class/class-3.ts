/**
 * class
 * typescript中的类访问修饰符
 * public private
 * build by rwson @11/5/15
 * mail:rw_Song@sina.com
 */

class Person{
    public name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    print(){
        return this.name + this.age;
    }
}

class Teacher extends Person{
    school:string;
    constructor(school:string){
        this.school = school;
        super("小宋",23);
    }
    print(){
        return this.name + this.age + this.school;
    }
}

var student = new Teacher("清华大学");
alert(student.print());