/**
 * Functionality to be inherited by a subclass
 */

// Car
var Car = function ( settings ) {
    this.model = settings.model || 'no model provided';
    this.colour = settings.colour|| 'no colour provided';
};

// Mixin
var Mixin = function (){};
Mixin.prototype = {
    driveForward: function() {
        console.log('drive forward');
    },
    driveBackward: function () {
        console.log('drive backward');
    }
};

// Augment existing 'class' with a method from another one
function augment ( receivingClass, givingClass) {
    // only proide certain methods
    if ( arguments[2] ) {
        for (var i = 2, len=arguments.length; i<len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodname in givingClass.prototype ) {
            /* check to make sure the receiving class doesn't
            have a method of the same name as the one currently
            being processed
             */
            if (!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodname] = givingClass.prototype[methodname];
            }
        }
    }
};

// Augment the Car with the methods 'driveForward' and 'driveBackward'
augment( Car, Mixin, 'driveForward', 'driveBackward' );

// Create a new Car
var vehicle = new Car({model:'Ford Escort', colour: 'blue'});

// Test to make sure we now have access to the methods
vehicle.driveForward();
vehicle.driveBackward();