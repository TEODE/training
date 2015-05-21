/**
 * Prototype creates objects based on a template of existing object through cloning
 */
// No need for capitalization as it's not a constructor
var someCar = {
    drive: function() {},
    name: 'Mazda'
}

// Use Object.create to generate a new car
var anotherCar = Object.create( someCar );
console.log(anotherCar.name); // Now you'll hopefully see that one is a prototype of the other

// advanced concepts such as differential inheritance
var vehicule = {
    getModel: function () {
        console.log('The model of the is vehicule is..' + this.Model);
    }
};

var car = Object.create(vehicule, {
    'id': {
        value: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        }),
        enumerable: true // writable: false, configurable: false by default
    },
    'model': {
        value: 'Ford',
        enumerable: true
    }
});
// Without Object.create
var vehiculePrototype = {
    init: function (carModel) {
        this.model = carModel;
    },
    getModel: function () {
        console.log('The model of this vehicule is..' + this.model);
    }
}

function vehicle(model) {
    function F() {};
    F.prototype = vehiculePrototype;

    var f = new F();

    f.init(model);
    return f;
}

var car = vehicle('Ford Escort');
car.getModel();

// Third alternative
var beget = (function () {
    function F()  {}

    return function (proto) {
        F.prototype = proto;
        return new F();
    };
})();