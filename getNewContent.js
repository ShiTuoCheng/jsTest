/**
 * Created by shituocheng on 2016/9/16.
 */
function getNewContent() {
    var request = getHttpObject();
    if (request){
        request.open("GET", "example.text", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4){
                var para = document.createElement("p");
                var text = document.createTextNode(request.responseText);
                para.appendChild(text);
                 document.getElementsByTagName('body')[0].appendChild(para);
            }
        };
        request.send(null);
    }
}

onLoadEvent(getNewContent());