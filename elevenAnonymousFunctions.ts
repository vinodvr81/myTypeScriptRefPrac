// normal Function
function factorial(number) {
    if (number <= 0) {         
       return 1; 
    } else {     
       return (number * factorial(number - 1));     
    } 
 }; 
 console.log(factorial(5));      

 //Ananymous Function
 console.log("Anonymous Function")
 let newFactorial = (numb) => (numb<= 0 ? 0 : numb);   

 console.log(newFactorial(5));