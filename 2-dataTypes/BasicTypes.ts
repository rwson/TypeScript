/**
 * BasicTypes
 * 基本数据类型
 *
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */

var isBoon:Boolean = false;          //  boolen类型
var isBoon2:boolean = false;         //  boolen类型

var number:number = 10;              //  number类型
var number2:Number = 10;             //  number类型

var str:String = "呵呵";             //  string类型
var str2:string = "呵呵";            //  string类型

var arr:number[] = [1, 2, 3, 4, 5];  //  Array类型
var arr2:Array<string> = ["1","2"];  //  Array类型

enum Color{Red,Green,Blue}           //  enumsure类型
enum Color2{Red = 1,Green = 0,Blue = 2}          //  enumsure类型

var notSure:any = 10;                //  any类型
var notSure2:any[] = [1,"2",false];  //  any类型

//  没有赋初值是undefined,所以要给定初值

function tell() {
    console.log("布尔值");
    console.log(isBoon);
    console.log(isBoon2);
}

tell();

function tell2() {
    console.log("数字类型");
    console.log(number);
    console.log(number2);
}

tell2();

function tell3() {
    console.log("字符串类型");
    console.log(str);
    console.log(str2);
}

tell3();

function tell4() {
    console.log("数组类型");
    console.log(arr);
    console.log(arr2);
}

tell4();

function tell5() {
    console.log("枚举类型");
    var color:string = Color[1];
    console.log(color);
    var color2:string = Color2[1];
    console.log(color2);
    var c:Color = Color.Green;
    console.log(c);
}

tell5();

function tell6() {
    console.log(notSure);
    notSure = false;
    console.log(notSure);
    notSure = "hello typescript";
    console.log(notSure);
    console.log(notSure2);
}

tell6();

function test():string{
    return "hehe";
}

function test2():void{

}