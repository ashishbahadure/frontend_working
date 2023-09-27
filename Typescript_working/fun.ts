function fun2(...arr):any
{
    console.log(arr);
    var sum:any=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    document.getElementById('result').innerHTML=sum;
    
}
fun2(12,30);