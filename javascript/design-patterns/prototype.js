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


