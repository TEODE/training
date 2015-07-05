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