/**
 * interface接口
 * build by rwson @11/6/15
 * mail:rw_Song@sina.com
 */

//function printLabel(labelObj:{label:string}){
//    console.log(labelObj.label);
//}
//
//var myObj = {
//    "label":"hello"
//};
//printLabel(myObj);

interface LabelValue{
    label:string;
}

function printLabel(labelObj:LabelValue){
    console.log(labelObj.label);
}

var myObj = {
    "label":"hello Interface"
};
printLabel(myObj);
