/**
 Deals with problem of creating objects without need to specify
 exact class of object created
 */

// reuse the code of original Constructor pattern example
function Car () {}

function VehicleFactory () {}
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.getVehicle = function (options) {
    return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.getVehicle({color: "yellow", turbo: true});
console.log(car instanceof Car); // => true

// approach #1: Modify a VehicleFactory instance to use the Truck class
function Truck () {}
carFactory.vehicleClass = Truck;

var mover = carFactory.getVehicle({endlosedCarge: true, length: 26});
console.log(mover instanceof Truck); // => true

// aproach #2: Subclass VehicleFactory to create a factory class that
// builds Trucks
function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory= new TruckFactory();
var bigFoot = truckFactory.getVehicle({ monster: true, cylinders: 12 });
console.log(bigFoot instanceof Truck); // => Truck;