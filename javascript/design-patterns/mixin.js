/**
 * Functionality to be inherited by a subclass
 */

// Car
var Car = function ( settings ) {
    this.model = settings.model || 'no model provided';
    this.colour = settings.colour|| 'no colour provided';
};