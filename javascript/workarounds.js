/* Because this frequently changes when you change the scope by calling a new function,
you can't access the original value by using it.
Aliasing it to that allows you still to access the original value of this.
 */
var car = {};
car.starter = {};

car.start = function (){
    var that = this;

    // you can access car.starter this method with 'this'
    this.starter.active = false;

    var activateStarter = function() {
        // 'this' now points to the global scope
        // 'this.starter' is undefined, so use 'that' instead
        console.log(this.starter);

        that.starter.active = true;
        debugger; // break point for 'node debug' mode
        // you could use car.starter, but using 'that' gives more consistency and flexibility
        console.log(that);
    }
    activateStarter();

};

car.start();
