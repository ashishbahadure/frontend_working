var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "hii";
    }
    Animal.prototype.fullname = function () {
        console.log('ashish bahadure');
    };
    return Animal;
}());
var vehicle = /** @class */ (function () {
    function vehicle() {
        this.vehicle_company = "tata";
        this.vehicle_name = "tiago";
    }
    vehicle.prototype.fullname = function () {
        console.log('tata -tagio');
    };
    return vehicle;
}());
var obj = new Animal();
console.log(obj.fullname());
