/**
 * class
 * typescript中的static
 * public private
 * build by rwson @11/5/15
 * mail:rw_Song@sina.com
 */

class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return "hello," + this.greeting;
    }
}

var greet:Greeter;
greet = new Greeter("呵呵哒");
alert(greet.greet());