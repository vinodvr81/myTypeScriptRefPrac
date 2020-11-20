// normal Function
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
;
console.log(factorial(5));
//Ananymous Function
console.log("Anonymous Function");
var newFactorial = function (numb) { return (numb <= 0 ? 0 : numb); };
console.log(newFactorial(5));
//Recursive Function using 
var funcRec = function (x) {
    while (x <= 0) {
        if (x <= 0) {
            (1);
        }
        else {
            (x * x--);
        }
    }
};
console.log(funcRec(5));
