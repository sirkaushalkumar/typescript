//var n : any = 1;
//n = 'Robb';

var isWinter: boolean = false;
isWinter = true;
var count: Number = 5;
var named : String = "Bran"
var names: any[] = ["Jon", "Rickon", "Arya"];

enum Starks {Jon,Bran,Eddard,Catalyn}
var cat: Starks = Starks.Catalyn;
console.log(cat);
function getName(): void{
    console.log("Winter is coming!!")
}

getName();