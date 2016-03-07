/**
 * interface中的类
 * build by rwson @11/8/15
 * mail:rw_Song@sina.com
 */

interface ClockInterface{
    currentTime:Date;
    setTime(d:Date);
}

class Clock  implements ClockInterface{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime = d;
    }
    constructor(h:number,m:number){
    }
}