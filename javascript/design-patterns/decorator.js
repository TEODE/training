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

// Example 2: Simply decorate objects with multiple decorators

// What we're going to decorate
function MacBook() {
    this.cost = function () { return 997 };
    this.screenSize = function () { return 13.3 };
}

// Decorator 1
function Memory( macbook ) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}

// Decorator 2
function Engraving( macbook ) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    }
}

// Decorator 3
function Insurance( macbook ) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    }
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost()); //1522
console.log(mb.screenSize()); //13.3

/**
 * Pseudo-classical decorators
 */
// Constructor.
var Interface = function (name, methods) {
    if (arguments.length != 2) {
        throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
    }
    this.name = name;
    this.methods = [];
    for (var i = 0, len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
        }
        this.methods.push(methods[i]);
    }
};


// Static class method.
Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
    }
    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.");
        }
        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
            }
        }
    }
};

var TodoList = new Interface('Composite', ['add', 'remove']);
var TodoItem = new Interface('TodoItem', ['save']);
// TodoList class
var myTodoList = function(id, method, action) {
    // implements TodoList, TodoItem
};
function addTodo(todoInstance) {
    Interface.ensureImplements(todoInstance, TodoList, TodoItem);
    // This function will throw an error if a required methode is not implemented
    // halting executino of the function.
}

var Macbook = new Interface('Macbook', ['addEngraving', 'addParallels', 'add4GBRam', 'add8GBRam', 'addCase', 'getPrice']);


var Bicycle = new Interface('Bicycle', ['assemble', 'wash', 'ride', 'repair',
    'getPrice']);
var BicycleDecorator = function(bicycle) { // implements Bicycle
    Interface.ensureImplements(bicycle, Bicycle);
    this.bicycle = bicycle;
}
BicycleDecorator.prototype = {
    assemble: function() {
        return this.bicycle.assemble();
    },
    wash: function() {
        return this.bicycle.wash();
    },
    ride: function() {
        return this.bicycle.ride();
    },
    repair: function() {
        return this.bicycle.repair();
    },
    getPrice: function() {
        return this.bicycle.getPrice();
    }
};


var MacbookPro = function(){
// implements Macbook
};

MacbookPro.prototype = {
    addEngraving: function () {
    },
    addParallels: function () {
    },
    add4GBRam: function () {
    },
    add8GBRam: function () {
    },
    addCase: function () {
    },
    getPrice: function () {
        return 900.00; //base price.
    }
};

// Macbook decorator abstract decorator class
var MacbookDecorator = function( macbook ) {
    Interface.ensureImplements(macbook, MacBook);
    this.macbook = macbook;
};

MacbookDecorator.prototype = {
    addEngraving: function(){
        return this.macbook.addEngraving();
    },
    addParallels: function(){
        return this.macbook.addParallels();
    },
    add4GBRam: function(){
        return this.macbook.add4GBRam();
    },
    add8GBRam:function(){
        return this.macbook.add8GBRam();
    },
    addCase: function(){
        return this.macbook.addCase();
    },
    getPrice: function(){
        return this.macbook.getPrice();
    }
};

function extend(subClass, superClass) {
    var F = function() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superclass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

var CaseDecorator = function( macbook ){
    /*call the superclass's constructor next*/
    this.superclass.constructor(macbook);
};

extend( CaseDecorator, MacbookDecorator );

CaseDecorator.prototype.addCase = function(){
    return this.macbook.addCase() + " Adding case to macbook ";
};

CaseDecorator.prototype.getPrice = function(){
    return this.macbook.getPrice() + 45.00;
};

// Instanciation of the macbook
var myMacbookPro = new MacbookPro();

// This will return 900.00
console.log(myMacbookPro.getPrice());

// Decorate the macbook
myMacbookPro = new CaseDecorator( myMacbookPro );

// This will return 945.00
console.log(myMacbookPro.getPrice());