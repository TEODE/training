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