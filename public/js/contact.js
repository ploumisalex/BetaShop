var button = document.getElementById("send_message");
var inform = document.getElementById("inform");

//button.onclick = function(){
    //inform.innerHTML = "Thank you for sending us a message!";

//}

function search_function(){
    window.location.href = "/search?t=" + document.getElementById("search_value").value;
}