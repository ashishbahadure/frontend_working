var a:any = prompt("enter number 1");
var b:any = prompt("enter number 2");

if(a > b) {
    var r:any =document.getElementById('result');
    r.innerHTML = a+"is greater;"
}
else{
    var r:any =document.getElementById('result');
    r.innerHTML = b+"is greater;"

}