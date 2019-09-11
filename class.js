var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "Brandon";
        this.saying = "Winterfell";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    Stark.castle = "Winterfell";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is Coming!!";
console.log(Stark.castle);
ned.hello("Robert");
