// Each of the following options will create a new empty object
var newObject = {}; // or
var newObject = Object.create(null); // or
var newObject = new Object();

// ECMAScript 3 compatible approaches to assignment

// 1. Dot syntax
newObject.someKey = "Hello World"; // Write properties
var key = newObject.someKey; // Access properties

// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties
var key = newObject['someKey']; // Access properties

// ECMAScript 5 only compatible approaches

// 3. Object.defineProperty
Object.defineProperty(newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

// If the above feels a little difficult to read, a short-hand could
// be written as follows

var config = {};
var defineProp = function( obj, key, value) {
    config.value = value;
    Object.defineProperty(obj, key, config);
}

// Create a new empty object
var man = Object.create(null);

// Populate the object with properties

defineProp( man, 'car', 'Delorean');
defineProp( man, 'dob', '1981');
defineProp( man, 'beard', false);

// 4. Object.defineProperties
Object.defineProperties(newObject, {
    "someKey": {

    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
});

// Inheritance
var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
console.log(driver.topSpeed); //100mph