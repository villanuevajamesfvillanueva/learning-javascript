
function a() {
    function b() {
    
        console.log(myVar);
    }
    let myVar = 2;
    console.log(myVar);
    b();
    
    
}

let myVar = 1;
console.log(myVar);
a();
console.log("Last line. myVar = " + myVar);