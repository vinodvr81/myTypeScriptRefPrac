export class Logger {
    log(msg: any){
         console.log(msg);
         }
    error(msg:any){
         console.error(msg);
         }
    warn(msg:any){
         console.warn(msg); 
        }
  }

let dError:Logger = new Logger;
dError.error("This is the error");
dError.log("This is for the information");
dError.warn("This is for the warning");