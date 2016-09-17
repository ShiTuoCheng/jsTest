/**
 * Created by shituocheng on 2016/9/17.
 */
//var elem = document.getElementById("message");

function positionMessage() {
    var elem = document.getElementById("message")
    elem.style.position = "absolute";
    elem.style.left = "0px";
    elem.style.top = "0px";
    moveElement("message", 125, 125, 10);
}

function moveMessage() {
    if (!document.getElementById) return false;

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 100) return true;
    if (xpos < 200){
        xpos++;
    }
    if (xpos > 200){
        xpos--;
    }
    if (ypos <100){
        ypos ++;
    }
    if (ypos > 100){
        ypos --;
    }
    elem.style.left = xpos +"px";
    elem.style.top = ypos + "px";
    var movement = setTimeout("moveMessage()", 10);
}

function moveElement(elementId, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    var elem = document.getElementById(elementId);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) return true;
    if (xpos < final_x){
        xpos++;
    }
    if (xpos > final_x){
        xpos--;
    }
    if (ypos < final_y){
        ypos ++;
    }
    if (ypos > final_y){
        ypos --;
    }
    elem.style.left = xpos +"px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementId+"', "+final_x+","+final_y+","+interval+")";
    var movement = setTimeout(repeat, interval);
}

//onLoadEvent(moveMessage());
onLoadEvent(positionMessage());