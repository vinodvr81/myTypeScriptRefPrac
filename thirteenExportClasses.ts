//class names in typescript usually starts with capital letter

export class TrialExport{
    constructor(private x:number, private y:number){
      }

      addMul(){
          console.log(this.x + this.y);
          console.log(this.x  * this.y);

      }

      subDiv(){
        console.log(this.x - this.y);
        console.log(this.x/this.y);

    }
}

