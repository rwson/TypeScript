/**
 * drag
 * build by rwson @11/12/15
 * mail:rw_Song@sina.com
 */

class Drag{
    element:HTMLElement;
    isDown:boolean = false;
    constructor(){
        this.isDown = false;
        this.element = document.createElement("div");
        document.body.appendChild(this.element);
    }

    static setStyle(obj,styles){

    }

    //  绑定拖拽相关的三大事件
    public init(){
        this.element.onmousedown = function(ev){
            this.isDown = true;
        };
        this.element.onmousemove = function(ev){
            var oEv = ev || event;

        };
        this.element.onmouseup = function(ev){
            this.isDown = false;
        };
    }
}