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