var a = prompt("enter number 1");
var b = prompt("enter number 2");
if (a > b) {
    var r = document.getElementById('result');
    r.innerHTML = a + "is greater;";
}
else {
    var r = document.getElementById('result');
    r.innerHTML = b + "is greater;";
}
