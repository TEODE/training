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
console.log(bigFoot instanceof Truck); // => True;

/**
 * The Abstract factory aims to encapsulate a group of individual factories
 * with a common goal
 */
var AbstractVehicleFactory = (function () {
    var types = {};

    return {
        getVehicle: function (type, customizations) {
            var Vehicle = types[type];
            return (Vehicle) ? new Vehicle(customizations) : null;
        },

        registerVehicule: function (type, Vehicle) {
            var proto = Vehicle.prototype;

            // only register classes that fulfill the vehicle contract
            if (proto.drive && proto.breakDown) {
                types[type] = Vehicle;
            }
            return AbstractVehicleFactory;
        }
    };
})();

// Usage
AbstractVehicleFactory.registerVehicule("car", Car);
AbstractVehicleFactory.registerVehicule("truck", Truck);

var car = AbstractVehicleFactory.getVehicle("car", { color: "yellow", turbo: true});
var truck = AbstractVehicleFactory.getVehicle("truck", { monster: "true", cylinders: 32});