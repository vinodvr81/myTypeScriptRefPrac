//for loop example

let jName:any; 
jName = "Vinod Rangaswamy Vukkalam" ;
let count:any ;
for(count in jName) {
   console.log(jName[count])  
}


let nameList:string[]; 
nameList = ["Vinod Rangaswamy Vukkalam" ];
let countNew:any ;
for(countNew in nameList) {
   console.log(nameList[countNew])  
}


for (let ite = 0; ite <= 5; ite++) {
   console.log("Hello Vinod. Greeting Number: " + ite);
}