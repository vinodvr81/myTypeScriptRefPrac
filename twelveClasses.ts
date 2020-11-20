//class names in typescript usually starts with capital letter
class Point{
    constructor(private x:number, private y:number){
      }

      show(){
          console.log(this.x,this.y);

      }
}

let point = new Point(5,19);

point.show()