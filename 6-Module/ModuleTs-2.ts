/**
 * ModuleTs
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */

module Validation{
    export interface StringValidator{
        isAcceptable(s:string):boolean;
    }

    var strReg = /^[A-Za-z]+$/;
    var numReg = /^[0-9]+$/;

    export class letterValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return strReg.test(s);
        }
    }

    export class zipCode implements StringValidator{
        isAcceptable(s:string):boolean{
            return s.length == 5 && numReg.test(s);
        }
    }
}

