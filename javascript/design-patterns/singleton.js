/* Singleton restricts instanciation of a class to a single object
 */
var mySingleton = function () {

    // here are our private methods and variables
    var privateVariable = 'something private';

    function showPrivate() {
        console.log(privateVariable);
    }

    // public variables and methods (which can access
    // private variables and methods)
    return {

        publicMethod: function () {
          showPrivate();
        },

        publicVar: 'the public can see this!'
    };
};
var single = mySingleton();
single.publicMethod(); // logs 'something private'
console.log(single.publicVar); // logs 'the public can see this!'

// To save on resources, we can place the instanciation code inside another constructore function
var Singleton = (function () {
    var instantiated;

    function init() {
        // singleton here
        return {
            publicMethod: function () {
                console.log("hello world");
            },
            publicProperty: 'test'
        }
    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    }
})();

// calling public methods is then as easy as
Singleton.getInstance().publicMethod();

// One last example
var SingletonTester = (function () {
   // options: an object containing configuration options for the singleton
   // e.g. var options = {name: 'test', pointC: 5};
    function Singleton(options) {

        // set option to the options supplied or an empty object if none provided
        options = options || {};
        // set the name parameter
        this.name = 'SingletonTester';
        var args = Array.prototype.slice.call(arguments)[0];
        console.log(arguments);
        // set the value of pointX
        this.pointX = args.pointX || 6;
        // set the value of pointY
        this.pointY = args.pointY || 10;
    }
    // this is our instance holder
    var instance;

    // this is an emulation of static variables and methods
    var _static = {

        name: 'SingletonTester',

        // This is a method for getting an instance
        // It returns a singleton instance of a singleton object
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
    pointX: 5,
    pointY: 12
});
console.log(singletonTest.pointX); // outputs 5
console.log(singletonTest.pointY); // outputs 12
