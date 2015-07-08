/**
 * Promotes code reuse as a flexible alternative to subclassing
 * Handy to add features to objects without changing underlying code
 */

// Recap on subclassing first with example...
var Person = function ( firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = 'male';
};

// a new instance of Person can then easily be created as follows:
var clark = new Person ( "Clark", "Kent");

// Define a subclass constructor for 'Superhero':
var Superhero = function( firstName, lastName, powers) {

    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
    Person.call(this, firstName, lastName);

    // Finally, store their powers, a new array of traits not found
    // in a normal 'Person'
    this.powers = powers;
};

var superman = new Superhero( "Clark", "Kent", ['flight', 'heat-vision']);
console.log(superman); // includes superhero props as well as gender

// Example 1: Basic decoration of existing object constructors with new functionality
function vehicle ( vehicleType) {

    // properties and defaults
    this.vehicleType = vehicleType || 'car',
    this.model = 'default',
    this.license = '0000-000'

}

// Test instance for a basic vehicle
var testInstance = new vehicle('car');
console.log(testInstance);
// vehicle: car, model: default, license:0000-000

// Let's create a new instance of vehicle, to be decorated
var truck = new vehicle('truck');

// new functionality we're decoration vehicle with
truck.setModel = function ( modelName ) {
    this.model = modelName;
}
truck.setColor = function ( colorName ) {
    this.color = colorName;
}

// Test the value setters and value assignment works correctly
truck.setModel('CAT');
truck.setColor('yellow');
console.log(truck);
// vehicle:truck, model:CAT, color:yellow

// Demonstrate 'vehicle' is still unaltered
var secondInstance = new vehicle('car');
console.log(secondInstance);