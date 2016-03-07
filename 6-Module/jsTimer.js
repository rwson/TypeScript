var div = document.createElement("div");
document.body.appendChild(div);
var obj = new Time.Test(div);
var button = document.createElement("button");
button.innerHTML = "start";
button.onclick = function(){
    obj.start();
};
document.body.appendChild(button);
var buttonStop = document.createElement("button");
buttonStop.innerHTML = "stop";
buttonStop.onclick = function(){
    obj.stop();
};
document.body.appendChild(buttonStop);