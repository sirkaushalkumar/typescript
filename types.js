//var n : any = 1;
//n = 'Robb';
var isWinter = false;
isWinter = true;
var count = 5;
var named = "Bran";
var names = ["Jon", "Rickon", "Arya"];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catalyn"] = 3] = "Catalyn";
})(Starks || (Starks = {}));
var cat = Starks.Catalyn;
console.log(cat);
function getName() {
    console.log("Winter is coming!!");
}
getName();
