//recursion function
console.log("hii");
function getNumber(i) {
    console.log(i);
    if (i < 100) {
        getNumber(i + 1);
    }
}
getNumber(1);
console.log("bye");
