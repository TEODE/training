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