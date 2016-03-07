/**
 * module.js
 * build by rwson @11/4/15
 * mail:rw_Song@sina.com
 * js中的module
 */

var rwsonModule = function (vip) {
    var yVip = document.getElementById(vip),
        yQ = "123456789";
    return {
        "add": function (t) {
            if (t >= 12) {
                yVip.innerHTML = "年费" + t + "-QQ群" + yQ;
            } else {
                yVip.innerHTML = "月费" + t;
            }
        }
    };
};

var rm = new rwsonModule("vip");
rm.add(10);

var rm2 = new rwsonModule("vip2");
rm.add(20);