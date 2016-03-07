/**
 * interface-6
 * build by rwson @11/8/15
 * mail:rw_Song@sina.com
 */

interface Shape{
    color:string;
}

interface PenStroke{
    penWidth:number;
}

interface Square extends Shape,PenStroke{
    sideLength:number;
}

var s = <Square>{};
s.color = "blue";
s.penWidth = 100;
s.sideLength = 10;

interface Counter{
    interval:number;
    reset():void;
    (start:number):string;
}

var c:Counter;
c.reset();