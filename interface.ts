interface Stark {
    name: String;
    age?: number;
}

function printName(stark: Stark){
    console.log(stark.name);
}
printName({name:"Eddard"})
printName({name:"Joe"})