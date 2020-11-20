

let mes = 'abs';

let viewS = mes.endsWith('s');

console.log(viewS)

let cest;

cest = 'abc';

let viewC = (<string> cest).endsWith('c')

console.log(viewC)

let alternateViewC = (cest as string).endsWith('c')

console.log(alternateViewC)