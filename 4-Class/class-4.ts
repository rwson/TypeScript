/**
 * class
 * typescript中的封装的实现
 * public private
 * build by rwson @11/5/15
 * mail:rw_Song@sina.com
 */

class Hello{
    private _name:string;
    private _age:number;
    get name():string {
        return this._name;
    }
    set name(value:string) {
        this._name = value;
    }
    get age():number{
        return this._age;
    }
    set age(age:number) {
        if(age > 100 || age < 0){
            alert("年龄在0-200之间");
            return;
        }
        this._age = age;
    }
}

var hello = new Hello();
hello.name = "呵呵";
alert(hello.name);
