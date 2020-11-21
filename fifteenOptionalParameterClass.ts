//optional parameters for the object of a class

class OptionalParameter{
    x:number;
    y:number;
    constructor(x?:number, y?:number){
        this.x = x;        
        this.y = y;        
      }
      showP(){
        console.log(this.x);
        console.log(this.y);
      }
}

let op = new OptionalParameter();
op.showP()

let pp = new OptionalParameter(10,100);
pp.showP();