/**
 * ModuleTs
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */

interface StringValidator{
    isAcceptable(s:string):boolean;
}

var strReg = /^[A-Za-z]+$/;
var numReg = /^[0-9]+$/;

class StringCHeck implements StringValidator{
    isAcceptable(s:string):boolean{
        return strReg.test(s);
    }
}

class ZipCode implements StringValidator{
    isAcceptable(s:string):boolean{
        return s.length == 5 && numReg.test(s);
    }
}

