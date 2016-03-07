/**
 * Function4
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 */

/**
 * this和lemeda表达式
 *
 * var name = "呵呵";
 * var people = {
 *      "name":"小宋是帅比",
 *      "getName":function(){
 *          return this.name;
 *      }
 * };
 *
 * 用()=>{}改变this指向
 */


var people = {
    "name":["小宋","是","帅比"],
    "getName":function(){
        var i = Math.floor(Math.random() * 3);
        return ()=>{
            return{
                "n":this.name[i]
            };
        };
    }
};

var myName = people.getName()()["n"];
console.log(people.getName());
document.getElementsByTagName("div")[0].innerHTML = myName;